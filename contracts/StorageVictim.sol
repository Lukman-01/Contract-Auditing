// // @audit-issue Outdated Solidity Version
// pragma solidity ^0.4.23;

// contract StorageVictim {

// address owner; @audit-issue visibility of owner not specified
// struct Storage {
// address user;
// uint amount;
// }

// mapping(address => Storage) storages;

// // @audit-info Constructor naming convection
// function StorageVictim() public {
// owner = msg.sender;
// }

// // 
// function store(uint _amount) public {           @audit-issue no access control, anyone can call store function
// // uninitialised pointer. str.user points to the storage address 0 which is "owner"

// // @audit-issue Lack of Input Validation

// Storage str;  @audit-issue Uninitialized variable
// str.user = msg.sender;
// str.amount = _amount;

// storages[msg.sender] = str;

// }
// function getStore() public view returns (address, uint) {
// Storage str = storages[msg.sender];
// return (str.user, str.amount);
// }
// function getOwner() public view returns (address) {
// return owner;
// }
// }

