// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./StMadToken.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CodesFactory is Ownable {
    using SafeERC20 for StMadToken;
    using MerkleProof for bytes32[];

    StMadToken private _stMadToken;
    bytes32[] public merkleRoots;

    mapping(bytes32 => bool) public redeemedLeaves;
    mapping(address => bytes32[]) public commitments;

    event MerkleRootAdded(uint256 indexed merkleRootIndex, bytes32 merkleRoot);
    event CodeRedeemed(
        address indexed redeemer,
        bytes32 secretCode,
        uint256 amount
    );

    constructor(address stMadTokenAddress) {
        _stMadToken = StMadToken(stMadTokenAddress);
    }

    function getMerkleRoots() public view returns (bytes32[] memory) {
        return merkleRoots;
    }

    function addMerkleRoot(
        bytes32 merkleRoot,
        uint256 numberOfCodes,
        uint256 amount
    ) external onlyOwner {
        merkleRoots.push(merkleRoot);
        uint256 merkleRootIndex = merkleRoots.length - 1;

        uint256 totalTokensToMint = numberOfCodes * amount;
        _stMadToken.mint(address(this), totalTokensToMint);

        emit MerkleRootAdded(merkleRootIndex, merkleRoot);
    }

    function commitCode(bytes32 commitment) external {
        bytes32[] storage userCommitments = commitments[msg.sender];
        for (uint256 i = 0; i < userCommitments.length; i++) {
            require(
                userCommitments[i] != commitment,
                "Commitment already exists"
            );
        }
        userCommitments.push(commitment);
    }

    function revealCode(
        uint256 merkleRootIndex,
        bytes32 secretCode,
        uint256 amount,
        uint256 nonce,
        bytes32[] calldata merkleProof
    ) external {
        // Check if the given Merkle root index is within bounds
        require(
            merkleRootIndex < merkleRoots.length,
            "Invalid Merkle root index"
        );

        // Calculate the commitment hash based on the secret code and nonce
        bytes32 commitment = calculateHash(secretCode, nonce);

        // Get the user's commitments
        bytes32[] storage userCommitments = commitments[msg.sender];

        // Search for the commitment in the user's commitments
        uint256 commitmentIndex = 0;
        bool found = false;
        for (uint256 i = 0; i < userCommitments.length; i++) {
            if (userCommitments[i] == commitment) {
                commitmentIndex = i;
                found = true;
                break;
            }
        }
        // Ensure that the commitment was found
        require(found, "Invalid commitment");

        // Calculate the leaf hash based on the secret code and amount
        bytes32 leaf = calculateHash(secretCode, amount);

        // Get the Merkle root from the merkleRoots array
        bytes32 merkleRoot = merkleRoots[merkleRootIndex];

        // Verify the provided Merkle proof
        require(
            merkleProof.verifyCalldata(merkleRoot, leaf),
            "Invalid Merkle proof"
        );
        // Check if the code has already been redeemed
        require(!redeemedLeaves[leaf], "Code has already been redeemed");

        // Mark the code as redeemed
        redeemedLeaves[leaf] = true;

        // Check if the contract has enough balance to send tokens
        uint256 contractBalance = _stMadToken.balanceOf(address(this));
        require(contractBalance >= amount, "Not enough tokens in the contract");

        // Remove the commitment from the user's commitments
        userCommitments[commitmentIndex] = userCommitments[
            userCommitments.length - 1
        ];
        userCommitments.pop();

        // Transfer the tokens to the user
        _stMadToken.safeTransfer(msg.sender, amount);

        // Emit the CodeRedeemed event
        emit CodeRedeemed(msg.sender, secretCode, amount);
    }

    function calculateHash(
        bytes32 code,
        uint256 number
    ) internal pure returns (bytes32) {
        return keccak256(bytes.concat(keccak256(abi.encode(code, number))));
    }
}
