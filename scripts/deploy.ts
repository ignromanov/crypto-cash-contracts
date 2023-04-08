import { ethers, upgrades } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploying the CSHToken contract
  const CSHTokenContract = await ethers.getContractFactory("CSHToken");
  const cSHTokenProxy = await upgrades.deployProxy(
    CSHTokenContract,
    [],
    { initializer: "initialize" }
  );
  await cSHTokenProxy.deployed();
  console.log("CSHToken deployed to:", cSHTokenProxy.address);

  // Deploying the CSHToken contract
  const CodesFactoryContract = await ethers.getContractFactory("CodesFactory");
  const codesFactoryProxy = await upgrades.deployProxy(
    CodesFactoryContract,
    [cSHTokenProxy.address],
    { initializer: "initialize" }
  );
  await codesFactoryProxy.deployed();
  console.log("CodesFactory deployed to:", codesFactoryProxy.address);

  // Call setCodesFactory function on CSHToken contract
  await cSHTokenProxy.setAuthorizedMinter(codesFactoryProxy.address);
  console.log("CodesFactory address set in CSHToken contract");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
