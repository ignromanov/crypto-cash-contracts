import { ethers, upgrades } from "hardhat";

async function main() {
  const cshtokenProxyAddress = "0xA729D60d8E59aA53d59A752F15cc47e5462BA1a5";
  const codesFactoryProxyAddress = "0x931Ea08151960d4d6110386ff22Dd78B583a7105";

  // Upgrade CSHToken
  const CSHTokenV2 = await ethers.getContractFactory("CSHTokenV2");
  await upgrades.upgradeProxy(cshtokenProxyAddress, CSHTokenV2);
  console.log("CSHTokenV2 implementation deployed");

  // Upgrade CodesFactory
  const CodesFactoryV2 = await ethers.getContractFactory("CodesFactoryV2");
  await upgrades.upgradeProxy(codesFactoryProxyAddress, CodesFactoryV2);
  console.log("CodesFactoryV2 implementation deployed");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
