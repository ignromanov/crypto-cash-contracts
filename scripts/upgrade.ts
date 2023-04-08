import { ethers, upgrades } from 'hardhat';

async function main() {
  const cshtokenProxyAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
  const codesFactoryProxyAddress = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9';

  // Upgrade CSHToken
  const CSHTokenV2 = await ethers.getContractFactory('CSHTokenV2');
  await upgrades.upgradeProxy(cshtokenProxyAddress, CSHTokenV2);
  console.log('CSHTokenV2 implementation deployed');

  // Upgrade CodesFactory
  const CodesFactoryV2 = await ethers.getContractFactory('CodesFactoryV2');
  await upgrades.upgradeProxy(codesFactoryProxyAddress, CodesFactoryV2);
  console.log('CodesFactoryV2 implementation deployed');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
