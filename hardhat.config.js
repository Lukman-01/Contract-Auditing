require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

module.exports = {
solidity: "0.8.19",
networks: {
hardhat: {
chainId: 1337,
},
},
paths: {
artifacts: "./artifacts",
cache: "./cache",
sources: "./contracts",
tests: "./test",
},
};
