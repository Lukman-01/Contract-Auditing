const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
const [deployer] = await ethers.getSigners();

// Deploy the StorageVictim contract
console.log("Deploying StorageVictim with the account:", deployer.address);
const StorageVictim = await ethers.getContractFactory("StorageVictim");
const storageVictim = await StorageVictim.deploy();

await storageVictim.deployed();

console.log("StorageVictim contract deployed to:", storageVictim.address);

console.log("Deployment completed!");
}

main()
.then(() => process.exit(0))
.catch((error) => {
console.error(error);
process.exit(1);
});

