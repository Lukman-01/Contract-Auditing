const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('StorageVictimResolved', function () {
let storageVictimResolved;
let owner;
let user1;
let user2;

beforeEach(async function () {
const StorageVictimResolved = await ethers.getContractFactory('StorageVictimResolved');
[owner, user1, user2] = await ethers.getSigners();

storageVictimResolved = await StorageVictimResolved.deploy();
//await storageVictimResolved.deployed();
});

it('should store and retrieve user data correctly', async function () {
const amount = 100;
const amount2 = 200;

// Connect with user1 signer
const storageVictimResolvedUser1 = storageVictimResolved.connect(user1);

// Call the store function to store user1's data
await storageVictimResolvedUser1.store(amount);

// Call the getStore function to retrieve the stored data
const [storedUser1, storedAmount1] = await storageVictimResolvedUser1.getStore();

console.log(`User1 - Stored User: ${storedUser1}`);
console.log(`User1 - Stored Amount: ${storedAmount1}`);
console.log("\n");

// Assert that the retrieved data matches the stored data
expect(storedUser1).to.equal(user1.address);
expect(storedAmount1).to.equal(amount);

// Connect with user2 signer
const storageVictimResolvedUser2 = storageVictimResolved.connect(user2);

// Call the store function to store user2's data
await storageVictimResolvedUser2.store(amount2);

// Call the getStore function to retrieve the stored data
const [storedUser2, storedAmount2] = await storageVictimResolvedUser2.getStore();

console.log(`User2 - Stored User: ${storedUser2}`);
console.log(`User2 - Stored Amount: ${storedAmount2}`);

// Assert that the retrieved data matches the stored data
expect(storedUser2).to.equal(user2.address);
expect(storedAmount2).to.equal(amount2);
});

it('should return the correct owner', async function () {
const contractOwner = await storageVictimResolved.getOwner();

console.log(`Contract Owner: ${contractOwner}`);

// Assert that the owner is the same as the owner signer's address
expect(contractOwner).to.equal(owner.address);
});
});

