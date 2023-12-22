// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

/// @title A contract for storing and retrieving user data
contract StorageVictimResolved {
/// @dev State variable to store the owner's address.
address private owner;

/// @dev Struct to hold the user address and associated amount.
struct Storage {
address user;
uint256 amount;
}

/// @dev Mapping to store user data linked to user addresses.
mapping(address => Storage) storages;

/// @notice Constructor sets the contract deployer as the owner.
constructor() {
owner = msg.sender;
}

/// @notice Stores the amount sent by the user.
/// @dev Maps the calling address to their stored amount.
/// @param _amount The amount to be stored.
function store(uint256 _amount) public {
Storage storage str = storages[msg.sender];
str.user = msg.sender;
str.amount = _amount;
storages[msg.sender] = str;
}

/// @notice Retrieves the stored data for the calling address.
/// @dev Fetches the user data from the storage mapping.
/// @return The address and the amount stored for the caller.
function getStore() public view returns (address, uint256) {
Storage storage str = storages[msg.sender];
return (str.user, str.amount);
}

/// @notice Returns the owner's address.
/// @return The address of the owner.
function getOwner() public view returns (address) {
return owner;
}
}

