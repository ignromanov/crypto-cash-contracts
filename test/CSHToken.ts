const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");
import { ContractFactory, Contract, Wallet } from "ethers";

interface DeployTokenFixtureResult {
  CSHToken: ContractFactory;
  cshToken: Contract;
  owner: Wallet;
  addr1: Wallet;
  addr2: Wallet;
  codesFactory: Wallet;
}
const deployTokenFixture = async (): Promise<DeployTokenFixtureResult> => {
  const CSHToken = await ethers.getContractFactory("CSHToken");
  const [owner, addr1, addr2, codesFactory] = await ethers.getSigners();
  const cshToken = await CSHToken.deploy();
  await cshToken.deployed();
  await cshToken.connect(owner).initialize();
  return { CSHToken, cshToken, owner, addr1, addr2, codesFactory };
};

describe("CSHToken", () => {
  let cshToken: Contract,
    owner: Wallet,
    addr1: Wallet,
    addr2: Wallet,
    codesFactory: Wallet;

  beforeEach(async () => {
    ({ cshToken, owner, addr1, addr2, codesFactory } = await loadFixture(
      deployTokenFixture
    ));
  });

  it("Should have the correct name and symbol", async () => {
    expect(await cshToken.name()).to.equal("CryptoCash Token");
    expect(await cshToken.symbol()).to.equal("CSH");
  });

  it("Should set the owner upon initialization", async () => {
    expect(await cshToken.owner()).to.equal(owner.address);
  });

  it("Should allow the owner to set the AuthorizedMinter", async () => {
    await cshToken.connect(owner).setAuthorizedMinter(codesFactory.address);
    expect(await cshToken.getAuthorizedMinter()).to.equal(codesFactory.address);
  });

  it("Should not allow non-owners to set the AuthorizedMinter", async () => {
    await expect(
      cshToken.connect(addr1).setAuthorizedMinter(codesFactory.address)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("Should allow the owner to change the AuthorizedMinter", async () => {
    await cshToken.connect(owner).setAuthorizedMinter(codesFactory.address);
    await cshToken.connect(owner).setAuthorizedMinter(addr1.address);
    expect(await cshToken.getAuthorizedMinter()).to.equal(addr1.address);
  });

  it("Should allow the AuthorizedMinter to mint tokens", async () => {
    await cshToken.connect(owner).setAuthorizedMinter(codesFactory.address);
    await cshToken.connect(codesFactory).mint(addr1.address, 1000);
    expect(await cshToken.balanceOf(addr1.address)).to.equal(1000);
  });

  it("Should not allow non-AuthorizedMinters to mint tokens", async () => {
    await expect(
      cshToken.connect(addr1).mint(addr2.address, 1000)
    ).to.be.revertedWith("Only AuthorizedMinter can mint tokens");
  });

  it("Should emit the CodesFactoryChanged event when setting a new AuthorizedMinter", async () => {
    await expect(
      cshToken.connect(owner).setAuthorizedMinter(codesFactory.address)
    )
      .to.emit(cshToken, "CodesFactoryChanged")
      .withArgs(ethers.constants.AddressZero, codesFactory.address);
  });

  it("Should allow the CodesFactory to burn tokens", async () => {
    await cshToken.connect(owner).setAuthorizedMinter(codesFactory.address);
    await cshToken.connect(codesFactory).mint(addr1.address, 1000);

    const addr1BalanceBeforeBurn = await cshToken.balanceOf(addr1.address);
    expect(addr1BalanceBeforeBurn).to.equal(1000);

    await cshToken.connect(codesFactory).burn(addr1.address, 500);

    const addr1BalanceAfterBurn = await cshToken.balanceOf(addr1.address);
    expect(addr1BalanceAfterBurn).to.equal(500);
  });

  it("Should not allow an unauthorized address to burn tokens", async () => {
    await cshToken.connect(owner).setAuthorizedMinter(codesFactory.address);
    await cshToken.connect(codesFactory).mint(addr1.address, 1000);

    await expect(
      cshToken.connect(addr2).burn(addr1.address, 500)
    ).to.be.revertedWith("Only AuthorizedMinter can mint tokens");
  });
});
