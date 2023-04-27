<p align="center">
<img src="https://i.imgur.com/kizvtYy.png" alt="CryptoCash Logo" width="200px">
</p>
<p align="center">
  <a href="https://soliditylang.org/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/officel/512/solidity.png" width="36" height="36" alt="Solidity" /></a>
  <a href="https://hardhat.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/hardhat-colored.svg" width="36" height="36" alt="Hardhat" /></a>
  <a href="https://ethereum.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ethereum-colored.svg" width="36" height="36" alt="Ethereum" /></a>
  <a href="https://polygon.technology/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/polygon-colored.svg" width="36" height="36" alt="Polygon" /></a>
</p>

# CryptoCash Smart Contracts

This repository contains the smart contracts for the CryptoCash project, a blockchain-based payment solution designed for developing countries. The system enables users to generate and redeem secret codes for acquiring tokens, utilizing the Polygon Mumbai blockchain for fast and affordable transactions.

[Web Application Repository](https://github.com/ignromanov/crypto-cash-webapp)

[Run Demo Application](https://crypto-cash-webapp.vercel.app/)

## Contracts

1. `CSHToken.sol`: The CryptoCash Token (CSH) contract is an ERC20 token with minting functionality. This token is specifically designed to work with the CodesFactory contract, and only the CodesFactory contract can mint new tokens. The contract makes use of OpenZeppelin's upgradeable contracts to ensure safe and efficient upgrades.

2. `CodesFactory.sol`: The main smart contract for generating and redeeming token-based codes. The contract makes use of a Merkle tree to validate the redemption of secret codes by users. Users can reveal secret codes and redeem the associated tokens if they have valid Merkle proofs.

## Features

- ERC20 token implementation with restricted minting functionality.
- Secure generation and redemption of token-based codes using Merkle trees.
- User commitments and code redemption tracking.
- Redeemed code verification.
- Upgradeable contracts for safe and efficient upgrades.

## Contract Addresses

### Polygon Mumbai Testnet

- CSHToken: [0x2dB58C3a57196F3f23206A6d901b47763Bd07EdB](https://mumbai.polygonscan.com/address/0x2dB58C3a57196F3f23206A6d901b47763Bd07EdB/transactions)
- CodesFactory: [0x5d61cf72bF4051779f36222c383Bf0B6af78D543](https://mumbai.polygonscan.com/address/0x5d61cf72bF4051779f36222c383Bf0B6af78D543/transactions)

## Development

### Prerequisites

- Node.js v16.x.x or later
- Npm package manager
- Hardhat development environment

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ignromanov/crypto-cash-contracts.git
```

2. Change to the repository's directory:

```bash
cd crypto-cash-contracts
```

3. Install dependencies:

```bash
npm install
```

### Compile

To compile the smart contracts, run:

```bash
npx hardhat compile
```

### Test

To run the tests, execute:

```bash
npx hardhat test
```

## Deployment

To deploy the smart contracts, you'll need to configure the deployment script (`scripts/deploy.js`) with your desired network and update the `.env` file with your private key and Infura project ID.

Then, run the following command to deploy:

```bash
npx hardhat run --network <network> scripts/deploy.js
```

## Support Me

<a href="https://www.buymeacoffee.com/ignromanov" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## License

This project is licensed under the MIT License.
