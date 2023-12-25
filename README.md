# StorageVictimResolved Smart Contract

## Overview

This repository contains the `StorageVictimResolved` smart contract, designed for storing and retrieving user data. The contract is written in Solidity and is intended for deployment on the Ethereum blockchain, specifically on the Sepolia test network. This project is set up using Hardhat, a development environment to compile, deploy, test, and debug Ethereum software.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 12.0 or higher)
- [npm](https://www.npmjs.com/), usually installed with Node.js

## Installation

To set up the project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/Lukman-01/Contract-Auditing.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Contract-Auditing
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:
   ```
   ALCHEMY_HTTP_URL=YourAlchemyHTTPURLForSepolia
   PRIVATE_KEY=YourEthereumAccountPrivateKey
   ```
   Replace `YourAlchemyHTTPURLForSepolia` with your Alchemy HTTP URL for the Sepolia network and `YourEthereumAccountPrivateKey` with your private key.

   ⚠️ **Important**: Never commit your `.env` file or expose your private keys publicly.

## Contract Details

The `StorageVictimResolved` contract includes functions for storing and retrieving user-associated data. It's structured with the following key components:

- **Owner**: The deployer of the contract becomes the owner.
- **Store Function**: Allows users to store a uint256 amount.
- **Retrieve Function**: Allows users to retrieve their stored amount.

## Compiling the Contract

To compile the contract, run:
```bash
npx hardhat compile
```

## Deploying the Contract

To deploy the contract to the Sepolia network:

1. Make sure your `.env` file is correctly set up with Alchemy URL and private key.
2. Run the deployment script:
   ```bash
   npx hardhat run --network sepolia scripts/deploy.js
   ```

## Running Tests

To run the tests for the contract:

```bash
npx hardhat test
```

## Additional Scripts

- **Deploy.js**: Script to deploy the contract on the Sepolia network.
- **Test Files**: Located in the `test` directory, used for testing the contract's functionalities.

 