const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");
import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import { Contract, BigNumber, Wallet } from "ethers";

interface CodesFactoryFixture {
  cshToken: Contract;
  codesFactory: Contract;
  owner: Wallet;
  addr1: Wallet;
  addr2: Wallet;
}

const deployCodesFactoryFixture = async (): Promise<CodesFactoryFixture> => {
  // Deploy the CSHToken contract
  const CSHToken = await ethers.getContractFactory("CSHToken");
  const [owner, addr1, addr2] = await ethers.getSigners();
  const cshToken = await CSHToken.deploy();
  await cshToken.deployed();
  await cshToken.connect(owner).initialize();

  // Deploy the CodesFactory contract
  const CodesFactory = await ethers.getContractFactory("CodesFactory");
  const codesFactory = await CodesFactory.deploy();
  await codesFactory.deployed();
  await codesFactory.connect(owner).initialize(cshToken.address);

  // Set the AuthorizedMinter in the CSHToken contract
  await cshToken.connect(owner).setAuthorizedMinter(codesFactory.address);

  return {
    cshToken,
    codesFactory,
    owner,
    addr1,
    addr2,
  };
};

const createSecretCodes = (numberOfCodes = 2): string[] =>
  Array.from({ length: numberOfCodes }, () =>
    ethers.utils.hexlify(ethers.utils.randomBytes(32))
  );

const createMerkleTree = (
  secretCodes: string[],
  amount: BigNumber
): StandardMerkleTree<(string | BigNumber)[]> => {
  const leaves = secretCodes.map((code) => [code, amount]);
  return StandardMerkleTree.of(leaves, ["bytes32", "uint256"]);
};

const createHash = (secretCode: string, num: number | BigNumber): string =>
  ethers.utils.keccak256(
    ethers.utils.keccak256(
      ethers.utils.defaultAbiCoder.encode(
        ["bytes32", "uint256"],
        [secretCode, num]
      )
    )
  );

const createLeaves = (secretCodes: string[], amount: BigNumber) =>
  secretCodes.map((code) => createHash(code, amount));

describe("CodesFactory", () => {
  let cshToken: Contract,
    codesFactory: Contract,
    owner: Wallet,
    addr1: Wallet,
    addr2: Wallet;

  beforeEach(async () => {
    ({ cshToken, codesFactory, owner, addr1, addr2 } = await loadFixture(
      deployCodesFactoryFixture
    ));
  });

  it("Should add a Merkle root and mint the correct amount of tokens", async () => {
    const secretCodes = createSecretCodes();
    const amount = ethers.BigNumber.from(333);
    const merkleTree = createMerkleTree(secretCodes, amount);

    const merkleRoot = merkleTree.root;
    const numberOfCodes = secretCodes.length;
    const totalTokensToMint = amount.mul(numberOfCodes);

    await codesFactory
      .connect(owner)
      .addMerkleRoot(merkleRoot, numberOfCodes, amount);

    const merkleRoots = await codesFactory.getMerkleRoots();
    expect(merkleRoots[merkleRoots.length - 1]).to.equal(merkleRoot);

    const contractBalance = await cshToken.balanceOf(codesFactory.address);
    expect(contractBalance).to.equal(totalTokensToMint);
  });

  it("Should commit a code, reveal it, and transfer the correct amount of tokens", async () => {
    const secretCodes = createSecretCodes();
    const amount = ethers.BigNumber.from(333);
    const merkleTree = createMerkleTree(secretCodes, amount);

    const merkleRoot = merkleTree.root;
    const numberOfCodes = secretCodes.length;
    await codesFactory
      .connect(owner)
      .addMerkleRoot(merkleRoot, numberOfCodes, amount);

    // Commit a code
    const secretCode = secretCodes[0];
    const nonce = 1;
    const commitment = createHash(secretCode, nonce);

    await codesFactory.connect(addr1).commitCode(commitment);

    // Reveal the code and transfer tokens
    const proof = merkleTree.getProof(0);
    await codesFactory
      .connect(addr1)
      .revealCode(0, secretCode, amount, nonce, proof);

    const userCommitments = await codesFactory.getUserCommitments(
      addr1.address
    );
    expect(userCommitments.length).to.equal(0);

    const userBalance = await cshToken.balanceOf(addr1.address);
    expect(userBalance).to.equal(amount);
  });

  it("Should fail if a non-owner tries to add a Merkle root", async () => {
    const secretCodes = createSecretCodes();
    const amount = ethers.BigNumber.from(333);
    const merkleTree = createMerkleTree(secretCodes, amount);

    const merkleRoot = merkleTree.root;
    const numberOfCodes = secretCodes.length;

    await expect(
      codesFactory
        .connect(addr1)
        .addMerkleRoot(merkleRoot, numberOfCodes, amount)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("Should fail if a user tries to commit an already used commitment", async () => {
    const secretCodes = createSecretCodes();
    const nonce = 1;
    const commitment = createHash(secretCodes[1], nonce);

    await codesFactory.connect(addr1).commitCode(commitment);
    await expect(
      codesFactory.connect(addr1).commitCode(commitment)
    ).to.be.revertedWith("Commitment already exists");
  });

  it("Should fail if a user tries to reveal a code with an invalid proof", async () => {
    const secretCodes = createSecretCodes();
    const amount = ethers.BigNumber.from(333);
    const merkleTree = createMerkleTree(secretCodes, amount);

    const merkleRoot = merkleTree.root;
    const numberOfCodes = secretCodes.length;
    const secretCode = secretCodes[1];

    await codesFactory
      .connect(owner)
      .addMerkleRoot(merkleRoot, numberOfCodes, amount);

    const nonce = 1;
    const commitment = createHash(secretCode, nonce);

    await codesFactory.connect(addr1).commitCode(commitment);

    const invalidProof: number[] = [];
    await expect(
      codesFactory
        .connect(addr1)
        .revealCode(0, secretCode, amount, nonce, invalidProof)
    ).to.be.revertedWith("Invalid Merkle proof");
  });

  it("Should fail if a user tries to reveal a code without committing it first", async () => {
    const secretCodes = createSecretCodes();
    const amount = ethers.BigNumber.from(333);
    const merkleTree = createMerkleTree(secretCodes, amount);

    const merkleRoot = merkleTree.root;
    const numberOfCodes = secretCodes.length;
    const secretCode = secretCodes[1];

    await codesFactory
      .connect(owner)
      .addMerkleRoot(merkleRoot, numberOfCodes, amount);

    const nonce = 1;
    const proof = merkleTree.getProof([secretCode, amount]);

    await expect(
      codesFactory
        .connect(addr1)
        .revealCode(0, secretCode, amount, nonce, proof)
    ).to.be.revertedWith("Invalid commitment");
  });

  it("Should work with larger Merkle trees", async () => {
    const numberOfCodes = 100;
    const amount = ethers.BigNumber.from(333);
    const secretCodes = createSecretCodes(numberOfCodes);
    const merkleTree = createMerkleTree(secretCodes, amount);

    const merkleRoot = merkleTree.root;
    await codesFactory
      .connect(owner)
      .addMerkleRoot(merkleRoot, numberOfCodes, amount);

    const merkleRoots = await codesFactory.getMerkleRoots();
    expect(merkleRoots[merkleRoots.length - 1]).to.equal(merkleRoot);

    const contractBalance = await cshToken.balanceOf(codesFactory.address);
    expect(contractBalance).to.equal(amount.mul(numberOfCodes));
  });

  it("Should allow multiple users to commit and reveal codes from larger Merkle trees", async () => {
    const numberOfCodes = 100;
    const amount = ethers.BigNumber.from(333);
    const secretCodes = createSecretCodes(numberOfCodes);
    const merkleTree = createMerkleTree(secretCodes, amount);

    const merkleRoot = merkleTree.root;
    await codesFactory
      .connect(owner)
      .addMerkleRoot(merkleRoot, numberOfCodes, amount);

    const secretCode1 = secretCodes[numberOfCodes - 2];
    const secretCode2 = secretCodes[numberOfCodes - 1];

    const nonce1 = 1;
    const nonce2 = 2;
    const commitment1 = createHash(secretCode1, nonce1);
    const commitment2 = createHash(secretCode2, nonce2);

    await codesFactory.connect(addr1).commitCode(commitment1);
    await codesFactory.connect(addr2).commitCode(commitment2);

    const proof1 = merkleTree.getProof([secretCode1, amount]);
    const proof2 = merkleTree.getProof([secretCode2, amount]);

    await codesFactory
      .connect(addr1)
      .revealCode(0, secretCode1, amount, nonce1, proof1);
    await codesFactory
      .connect(addr2)
      .revealCode(0, secretCode2, amount, nonce2, proof2);

    const userCommitments1 = await codesFactory.getUserCommitments(
      addr1.address
    );
    const userCommitments2 = await codesFactory.getUserCommitments(
      addr2.address
    );
    expect(userCommitments1.length).to.equal(0);
    expect(userCommitments2.length).to.equal(0);

    const userBalance1 = await cshToken.balanceOf(addr1.address);
    const userBalance2 = await cshToken.balanceOf(addr2.address);
    expect(userBalance1).to.equal(amount);
    expect(userBalance2).to.equal(amount);
  });

  it("Should add multiple Merkle roots and mint the correct amount of tokens for each", async () => {
    const numberOfCodes1 = 50;
    const amount1 = ethers.BigNumber.from(222);
    const secretCodes1 = createSecretCodes(numberOfCodes1);
    const merkleTree1 = createMerkleTree(secretCodes1, amount1);

    const merkleRoot1 = merkleTree1.root;
    await codesFactory
      .connect(owner)
      .addMerkleRoot(merkleRoot1, numberOfCodes1, amount1);

    const numberOfCodes2 = 100;
    const amount2 = ethers.BigNumber.from(333);
    const secretCodes2 = createSecretCodes(numberOfCodes2);
    const merkleTree2 = createMerkleTree(secretCodes2, amount2);

    const merkleRoot2 = merkleTree2.root;
    await codesFactory
      .connect(owner)
      .addMerkleRoot(merkleRoot2, numberOfCodes2, amount2);

    const merkleRoots = await codesFactory.getMerkleRoots();
    expect(merkleRoots[merkleRoots.length - 2]).to.equal(merkleRoot1);
    expect(merkleRoots[merkleRoots.length - 1]).to.equal(merkleRoot2);

    const contractBalance = await cshToken.balanceOf(codesFactory.address);
    expect(contractBalance).to.equal(
      amount1.mul(numberOfCodes1).add(amount2.mul(numberOfCodes2))
    );
  });

  it("Should allow users to commit and reveal codes from multiple Merkle roots", async () => {
    const numberOfCodes1 = 50;
    const amount1 = ethers.BigNumber.from(222);
    const secretCodes1 = createSecretCodes(numberOfCodes1);
    const merkleTree1 = createMerkleTree(secretCodes1, amount1);
    const merkleRoot1 = merkleTree1.root;
    await codesFactory
      .connect(owner)
      .addMerkleRoot(merkleRoot1, numberOfCodes1, amount1);

    const numberOfCodes2 = 100;
    const amount2 = ethers.BigNumber.from(333);
    const secretCodes2 = createSecretCodes(numberOfCodes2);
    const merkleTree2 = createMerkleTree(secretCodes2, amount2);
    const merkleRoot2 = merkleTree2.root;
    await codesFactory
      .connect(owner)
      .addMerkleRoot(merkleRoot2, numberOfCodes2, amount2);

    const secretCode1 = secretCodes1[numberOfCodes1 - 20];
    const secretCode2 = secretCodes2[numberOfCodes2 - 20];
    const nonce1 = 1;
    const nonce2 = 2;
    const commitment1 = createHash(secretCode1, nonce1);
    const commitment2 = createHash(secretCode2, nonce2);

    await codesFactory.connect(addr1).commitCode(commitment1);
    await codesFactory.connect(addr2).commitCode(commitment2);

    const proof1 = merkleTree1.getProof([secretCode1, amount1]);
    const proof2 = merkleTree2.getProof([secretCode2, amount2]);

    await codesFactory
      .connect(addr1)
      .revealCode(0, secretCode1, amount1, nonce1, proof1);
    await codesFactory
      .connect(addr2)
      .revealCode(1, secretCode2, amount2, nonce2, proof2);

    const userCommitments1 = await codesFactory.getUserCommitments(
      addr1.address
    );
    const userCommitments2 = await codesFactory.getUserCommitments(
      addr2.address
    );
    expect(userCommitments1.length).to.equal(0);
    expect(userCommitments2.length).to.equal(0);

    const userBalance1 = await cshToken.balanceOf(addr1.address);
    const userBalance2 = await cshToken.balanceOf(addr2.address);
    expect(userBalance1).to.equal(amount1);
    expect(userBalance2).to.equal(amount2);
  });

  it("Should return an empty array when no leaves are redeemed", async () => {
    const numberOfCodes = 20;
    const amount = ethers.BigNumber.from(333);
    const secretCodes = createSecretCodes(numberOfCodes);
    const merkleTree = createMerkleTree(secretCodes, amount);

    const merkleRoot = merkleTree.root;
    await codesFactory
      .connect(owner)
      .addMerkleRoot(merkleRoot, numberOfCodes, amount);

    const leaves = createLeaves(secretCodes, amount);
    const redeemedLeaves = await codesFactory.getRedeemedLeaves(leaves);
    expect(redeemedLeaves.length).to.equal(0);
  });

  it("Should return redeemed leaves when some leaves are redeemed", async () => {
    const numberOfCodes = 20;
    const amount = ethers.BigNumber.from(333);
    const secretCodes = createSecretCodes(numberOfCodes);
    const merkleTree = createMerkleTree(secretCodes, amount);

    const merkleRoot = merkleTree.root;
    await codesFactory
      .connect(owner)
      .addMerkleRoot(merkleRoot, numberOfCodes, amount);

    const secretCode = secretCodes[numberOfCodes - 1];
    const nonce = 1;
    const commitment = createHash(secretCode, nonce);

    await codesFactory.connect(addr1).commitCode(commitment);

    const proof = merkleTree.getProof([secretCode, amount]);
    await codesFactory
      .connect(addr1)
      .revealCode(0, secretCode, amount, nonce, proof);

    const leaves = createLeaves(secretCodes, amount);
    const redeemedLeaves = await codesFactory.getRedeemedLeaves(leaves);
    expect(redeemedLeaves.length).to.equal(1);
    expect(redeemedLeaves[0]).to.equal(leaves[numberOfCodes - 1]);
  });

  it("Should return redeemed leaves when all leaves are redeemed", async () => {
    const numberOfCodes = 10;
    const amount = ethers.BigNumber.from(333);
    const secretCodes = createSecretCodes(numberOfCodes);
    const merkleTree = createMerkleTree(secretCodes, amount);

    const merkleRoot = merkleTree.root;
    await codesFactory
      .connect(owner)
      .addMerkleRoot(merkleRoot, numberOfCodes, amount);

    for (let i = 0; i < numberOfCodes; i++) {
      const secretCode = secretCodes[i];
      const nonce = i + 1;
      const commitment = createHash(secretCode, nonce);

      await codesFactory.connect(addr1).commitCode(commitment);

      const proof = merkleTree.getProof([secretCode, amount]);
      await codesFactory
        .connect(addr1)
        .revealCode(0, secretCode, amount, nonce, proof);
    }

    const leaves = createLeaves(secretCodes, amount);
    const redeemedLeaves = await codesFactory.getRedeemedLeaves(leaves);
    expect(redeemedLeaves.length).to.equal(numberOfCodes);

    for (let i = 0; i < numberOfCodes; i++) {
      expect(redeemedLeaves[i]).to.equal(leaves[i]);
    }
  });

  it("Should remove a Merkle root by index", async () => {
    const amount = ethers.BigNumber.from(1);
    const secretCodes = createSecretCodes(1);
    const merkleTree = createMerkleTree(secretCodes, amount);

    // create array from 3 elements
    const merkleRoots = Array(3).fill(merkleTree.root);
    for (let i = 0; i < merkleRoots.length; i++) {
      await codesFactory.addMerkleRoot(merkleRoots[i], 1, 1);
    }
    let allMerkleRoots = await codesFactory.getMerkleRoots();
    expect(allMerkleRoots.length).to.equal(3);

    await codesFactory.removeMerkleRoot(1);

    allMerkleRoots = await codesFactory.getMerkleRoots();
    expect(allMerkleRoots.length).to.equal(2);
  });

  it("Should revert if trying to remove a non-existing Merkle root", async () => {
    await expect(codesFactory.removeMerkleRoot(0)).to.be.revertedWith(
      "Invalid Merkle root index"
    );
  });

  it("Should not allow non-owners to remove Merkle roots", async () => {
    const secretCodes = createSecretCodes();
    const amount = ethers.BigNumber.from(333);
    const merkleTree = createMerkleTree(secretCodes, amount);

    const merkleRoot = merkleTree.root;
    const numberOfCodes = secretCodes.length;

    await codesFactory.addMerkleRoot(merkleRoot, numberOfCodes, amount);

    await expect(
      codesFactory.connect(addr1).removeMerkleRoot(0)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });
});
