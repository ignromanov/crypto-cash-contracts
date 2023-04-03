# CryptoCash Smart Contracts

This repository contains the smart contracts for the CryptoCash project, a token-based system that allows users to generate and redeem secret codes for acquiring tokens. These contracts are deployed on the Polygon blockchain.

[Web Application Repository](https://github.com/ignromanov/crypto-cash-webapp)

[Run Demo Application](https://demo.crypto-cash.app)

## Contracts

1. `CSHToken.sol`: The CryptoCash token (CSH) contract, which is an ERC20 token.
2. `CodesFactory.sol`: The main contract that handles the generation and redemption of secret codes for acquiring tokens.

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

## License

This project is licensed under the MIT License.
