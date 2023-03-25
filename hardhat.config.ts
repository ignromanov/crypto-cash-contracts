import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const MUMBAI_API_KEY = process.env.MUMBAI_API_KEY || '';
const GOERLI_API_KEY = process.env.GOERLI_API_KEY || '';

const config: HardhatUserConfig = {
  solidity: {    
    compilers: [
    {
      version: "0.8.9", 
      settings: {},
    },
  ],
},
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
 },
 typechain: {
  outDir: 'types',
  target: 'ethers-v5',
},
networks: {
   goerli: {
      url: `https://goerli.infura.io/v3/${GOERLI_API_KEY}`,
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${MUMBAI_API_KEY}`,
    },    
    localhost: {
      url: 'http://localhost:8545',
      chainId: 31337,
      accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80']
    },  
  },
};

export default config;
