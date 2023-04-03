// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./CSHToken.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title CodesFactory - A contract to generate and redeem token-based codes
 */
contract CodesFactory is Ownable, ReentrancyGuard {
    using SafeERC20 for CSHToken;
    using MerkleProof for bytes32[];

    CSHToken private _CSHToken;
    bytes32[] public merkleRoots;

    mapping(bytes32 => bool) public redeemedLeaves;
    mapping(address => bytes32[]) public commitments;

    event MerkleRootAdded(uint256 indexed merkleRootIndex, bytes32 merkleRoot);
    event UserCommitmentAdded(address indexed user, bytes32 commitment);
    event CodeRedeemed(
        address indexed redeemer,
        bytes32 secretCode,
        uint256 amount
    );

    /**
     * @notice Creates a new CodesFactory contract
     * @param CSHTokenAddress The address of the CSHToken contract
     */
    constructor(address CSHTokenAddress) {
        _CSHToken = CSHToken(CSHTokenAddress);
    }

    /**
     * @notice Receive function for incoming Ether
     */
    receive() external payable {}

    /**
     * @notice Fallback function for incoming Ether
     */
    fallback() external payable {}

    /**
     * @notice Get all Merkle roots
     * @return A list of Merkle roots
     */
    function getMerkleRoots() external view returns (bytes32[] memory) {
        return merkleRoots;
    }

    /**
     * @notice Get commitments for a specific user
     * @param user The user's address
     * @return A list of commitments
     */
    function getUserCommitments(
        address user
    ) external view returns (bytes32[] memory) {
        return commitments[user];
    }

    /**
     * @notice Get redeemed leaves from a list of leaves
     * @param leaves A list of leaves
     * @return A list of redeemed leaves
     */
    function getRedeemedLeaves(
        bytes32[] calldata leaves
    ) external view returns (bytes32[] memory) {
        bytes32[] memory redeemedLeavesArray = new bytes32[](leaves.length);

        uint256 redeemedLeavesCount = 0;

        for (uint256 i = 0; i < leaves.length; i++) {
            if (redeemedLeaves[leaves[i]]) {
                redeemedLeavesArray[redeemedLeavesCount] = leaves[i];
                redeemedLeavesCount++;
            }
        }

        assembly {
            mstore(redeemedLeavesArray, redeemedLeavesCount)
        }

        return redeemedLeavesArray;
    }

    /**
     * @notice Add a Merkle root to the contract
     * @param merkleRoot The Merkle root to be added
     * @param numberOfCodes The number of codes associated with the Merkle root
     * @param amount The token amount associated with each code
     */
    function addMerkleRoot(
        bytes32 merkleRoot,
        uint256 numberOfCodes,
        uint256 amount
    ) external onlyOwner {
        merkleRoots.push(merkleRoot);
        uint256 merkleRootIndex = merkleRoots.length - 1;

        uint256 totalTokensToMint = numberOfCodes * amount;
        _CSHToken.mint(address(this), totalTokensToMint);

        emit MerkleRootAdded(merkleRootIndex, merkleRoot);
    }

    /**
     * @notice Commit a code to the contract
     * @param commitment The code commitment
     */
    function commitCode(bytes32 commitment) external {
        bytes32[] storage userCommitments = commitments[msg.sender];
        for (uint256 i = 0; i < userCommitments.length; i++) {
            require(
                userCommitments[i] != commitment,
                "Commitment already exists"
            );
        }
        userCommitments.push(commitment);

        emit UserCommitmentAdded(msg.sender, commitment);
    }

    /**
     * @notice Reveal a secret code and redeem the associated tokens
     * @param merkleRootIndex The index of the Merkle root associated with the code
     * @param secretCode The secret code to be revealed
     * @param amount The token amount associated with the secret code
     * @param nonce The nonce used when committing the code
     * @param merkleProof The Merkle proof for the secret code
     */
    function revealCode(
        uint256 merkleRootIndex,
        bytes32 secretCode,
        uint256 amount,
        uint256 nonce,
        bytes32[] calldata merkleProof
    ) external {
        // Check the commitment and get its index
        uint256 commitmentIndex = checkCommitment(secretCode, nonce);

        // Validate the Merkle root index and proof
        bytes32 leaf = validateMerkleProof(
            merkleRootIndex,
            secretCode,
            amount,
            merkleProof
        );

        // Redeem the code and transfer tokens
        redeemCodeAndTransferTokens(secretCode, amount, leaf, commitmentIndex);
    }

    /**
     * @dev Validates the Merkle proof and ensures that the code hasn't been redeemed.
     * @param merkleRootIndex Index of the Merkle root in the merkleRoots array.
     * @param secretCode The secret code to reveal.
     * @param amount The amount of tokens associated with the secret code.
     * @param merkleProof The Merkle proof for the secret code.
     * @return The Merkle root associated with the valid proof.
     */
    function validateMerkleProof(
        uint256 merkleRootIndex,
        bytes32 secretCode,
        uint256 amount,
        bytes32[] calldata merkleProof
    ) internal view returns (bytes32) {
        require(
            merkleRootIndex < merkleRoots.length,
            "Invalid Merkle root index"
        );

        bytes32 leaf = calculateLeafHash(secretCode, amount);
        bytes32 merkleRoot = merkleRoots[merkleRootIndex];

        require(
            merkleProof.verifyCalldata(merkleRoot, leaf),
            "Invalid Merkle proof"
        );
        require(!redeemedLeaves[leaf], "Code has already been redeemed");

        return leaf;
    }

    /**
     * @dev Checks if the given secret code and nonce match a stored commitment.
     * @param secretCode The secret code to check.
     * @param nonce The nonce used when the commitment was created.
     * @return The index of the commitment in the user's commitments array.
     */
    function checkCommitment(
        bytes32 secretCode,
        uint256 nonce
    ) internal view returns (uint256) {
        bytes32 commitment = calculateCommitmentHash(secretCode, nonce);

        bytes32[] storage userCommitments = commitments[msg.sender];

        uint256 commitmentIndex = 0;
        bool found = false;
        for (uint256 i = 0; i < userCommitments.length; i++) {
            if (userCommitments[i] == commitment) {
                commitmentIndex = i;
                found = true;
                break;
            }
        }
        require(found, "Invalid commitment");

        return commitmentIndex;
    }

    /**
     * @dev Redeems the secret code, removes the commitment, and transfers the associated tokens to the user.
     * @param secretCode The secret code to redeem.
     * @param amount The amount of tokens associated with the secret code.
     * @param leaf The Leaf associated with the valid proof.
     * @param commitmentIndex The index of the commitment in the user's commitments array.
     */
    function redeemCodeAndTransferTokens(
        bytes32 secretCode,
        uint256 amount,
        bytes32 leaf,
        uint256 commitmentIndex
    ) internal {
        uint256 contractBalance = _CSHToken.balanceOf(address(this));
        require(contractBalance >= amount, "Not enough tokens in the contract");

        bytes32[] storage userCommitments = commitments[msg.sender];
        userCommitments[commitmentIndex] = userCommitments[
            userCommitments.length - 1
        ];
        userCommitments.pop();

        redeemedLeaves[leaf] = true;

        _CSHToken.safeTransfer(msg.sender, amount);

        emit CodeRedeemed(msg.sender, secretCode, amount);
    }

    /**
     * @notice Calculate the hash of a code and a nonce
     * @param code The code
     * @param nonce The nonce number
     * @return The hash of the code and nonce
     */
    function calculateCommitmentHash(
        bytes32 code,
        uint256 nonce
    ) internal pure returns (bytes32) {
        return keccak256(bytes.concat(keccak256(abi.encode(code, nonce))));
    }

    /**
     * @notice Calculate the hash of a code and a amount
     * @param code The code
     * @param amount The amount number
     * @return The hash of the code and amount
     */
    function calculateLeafHash(
        bytes32 code,
        uint256 amount
    ) internal pure returns (bytes32) {
        return keccak256(bytes.concat(keccak256(abi.encode(code, amount))));
    }
}
