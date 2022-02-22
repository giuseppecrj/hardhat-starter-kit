// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "./Storage.sol";

contract A {
	AppStorage public s;

	function setA(uint256 _a) public {
		s.a = _a;
	}

	function getA() public view returns (uint256) {
		return s.a;
	}
}

contract B {
	AppStorage public s;

	constructor(address _a) {
		s.contractA = _a;
		s.b = 4;
		s.c = 0x45;
		s.d = 0xF5;
	}

	function setB(uint256 _b) public {
		s.b = _b;
		// A(contractA).setA(_b + 1);
		(bool success, ) = s.contractA.delegatecall(
			abi.encodeWithSignature("setA(uint256)", _b + 1)
		);
		console.log("success", success);
	}

	function getB() public view returns (uint256) {
		return s.b;
	}
}
