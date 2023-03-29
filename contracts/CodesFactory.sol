// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./StMadToken.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CodesFactory is Ownable {
    StMadToken private _stMadToken;
    bytes32[] public merkleRoots;

    mapping(bytes32 => bool) public redeemedCodes;

    event MerkleRootAdded(uint256 indexed merkleRootIndex, bytes32 merkleRoot);
    event CodeRedeemed(address indexed user, uint256 amount);

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

    function redeemCode(
        uint256 merkleRootIndex,
        bytes32[] calldata merkleProof,
        bytes32 secretCodeHash,
        uint256 amount
    ) external {
        require(
            merkleRootIndex < merkleRoots.length,
            "Invalid Merkle root index"
        );

        bytes32 leaf = keccak256(abi.encodePacked(secretCodeHash, amount));
        bytes32 merkleRoot = merkleRoots[merkleRootIndex];

        require(
            MerkleProof.verify(merkleProof, merkleRoot, leaf),
            "Invalid Merkle proof"
        );

        require(
            !redeemedCodes[secretCodeHash],
            "Code has already been redeemed"
        );
        redeemedCodes[secretCodeHash] = true;

        require(
            _stMadToken.transfer(msg.sender, amount),
            "Token transfer failed"
        );

        emit CodeRedeemed(msg.sender, amount);
    }
}
