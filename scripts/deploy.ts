import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploying the CSHToken contract
  const CSHTokenContract = await ethers.getContractFactory("CSHToken");
  const cSHToken = await CSHTokenContract.deploy();
  await cSHToken.deployed();
  console.log("CSHToken deployed to:", cSHToken.address);

  // Deploying the CSHToken contract
  const CodesFactoryContract = await ethers.getContractFactory("CodesFactory");
  const codesFactory = await CodesFactoryContract.deploy(cSHToken.address);
  await codesFactory.deployed();
  console.log("CodesFactory deployed to:", codesFactory.address);

  // Call setCodesFactory function on CSHToken contract
  await cSHToken.setAuthorizedMinter(codesFactory.address);
  console.log("CodesFactory address set in CSHToken contract");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
