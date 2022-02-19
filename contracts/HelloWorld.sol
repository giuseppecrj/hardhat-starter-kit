// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
	uint256 public x;

	function hello() public pure returns (string memory) {
		return "Hello, FEM";
	}
}
