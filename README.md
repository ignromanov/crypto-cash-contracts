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

CryptoCash is a blockchain-based payment solution designed for developing markets, where the majority of transactions are cash-based due to high card transaction fees and low bank card usage. CryptoCash aims to streamline transactions by leveraging mobile phones and existing offline prepayment infrastructure, making payments faster, cheaper, and more convenient for users.
This repository contains the smart contracts for the project. The system enables users to generate and redeem secret codes for acquiring tokens, utilizing the Polygon Mumbai blockchain for fast and affordable transactions.

---

<a href="https://www.loom.com/share/b4a3bb2bb9e24bd38518e0b9396da757">
    <p>CryptoCash Presentation by Ignat Romanov - Watch Video</p>
    <p>
        <img width=300px src="https://i.imgur.com/cUSN8rZ.png" alt="CryptoCash Presentation by Ignat Romanov - Watch Video" />
    </p>
</a>

---

[Web Application Repository](https://github.com/ignromanov/crypto-cash-webapp)

[Demo Application](https://crypto-cash-webapp.vercel.app/)

---

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

- CSHToken: [0xA729D60d8E59aA53d59A752F15cc47e5462BA1a5](https://mumbai.polygonscan.com/address/0xA729D60d8E59aA53d59A752F15cc47e5462BA1a5/transactions)
- CodesFactory: [0x931Ea08151960d4d6110386ff22Dd78B583a7105](https://mumbai.polygonscan.com/address/0x931Ea08151960d4d6110386ff22Dd78B583a7105/transactions)

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
