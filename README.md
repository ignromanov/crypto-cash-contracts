# CryptoCash Smart Contracts

This repository contains the smart contracts for the CryptoCash project, a token-based system that allows users to generate and redeem secret codes for acquiring tokens. These contracts are deployed on the Polygon Mumbai blockchain.

[Web Application Repository](https://github.com/ignromanov/crypto-cash-webapp)

[Run Demo Application](https://crypto-cash-webapp.vercel.app/)

## Contracts

1. `CSHToken.sol`: The CryptoCash token (CSH) contract, which is an ERC20 token.
2. `CodesFactory.sol`: The main contract that handles the generation and redemption of secret codes for acquiring tokens.

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

### Support Me

<a href="https://www.buymeacoffee.com/ignromanov" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## License

This project is licensed under the MIT License.
