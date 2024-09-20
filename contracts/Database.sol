// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Database {
    // Mapping to store data with string keys and values
    mapping(string => string) private data;
    address private _owner;

    // Events
    event OwnerSet(address indexed oldOwner, address indexed newOwner);
    event DataSet(string indexed key, string value);

    // Constructor to initialize owner
    constructor() {
        _owner = msg.sender; // Setting the contract deployer as the initial owner
        emit OwnerSet(address(0), _owner);
    }

    // Modifier to restrict functions to only the owner
    modifier onlyOwner() {
        require(msg.sender == _owner, "Caller is not the owner");
        _;
    }

    // Function to set a value in the mapping
    function set(string memory key, string memory value) external onlyOwner {
        require(bytes(key).length > 0, "Invalid key");  // Ensure key is valid
        data[key] = value;
        emit DataSet(key, value);
    }

    // Function to get a value from the mapping
    function get(string memory key) external view returns (string memory) {
        require(bytes(data[key]).length > 0, "No value set for this key"); // Ensure there is a value stored
        return data[key];
    }

    // Function to check if a key exists in the mapping
    function exists(string memory key) external view returns (bool) {
        return bytes(data[key]).length > 0;
    }

    // Function to change ownership (if needed in the future)
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner is the zero address");
        emit OwnerSet(_owner, newOwner);
        _owner = newOwner;
    }
}
