import { ethers, upgrades } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploying the StMadToken contract
  const StMadToken = await ethers.getContractFactory("StMadToken");
  const stMadToken = await StMadToken.deploy();
  await stMadToken.deployed();
  console.log("StMadToken deployed to:", stMadToken.address);

  // Deploying the StMadToken contract
  const CodesFactory = await ethers.getContractFactory("CodesFactory");
  const codesFactory = await CodesFactory.deploy(stMadToken.address);
  await codesFactory.deployed();
  console.log("CodesFactory deployed to:", codesFactory.address);

  // Call setCodesFactory function on stMadToken contract
  await stMadToken.setCodesFactory(codesFactory.address);
  console.log("CodesFactory address set in stMadToken contract");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
