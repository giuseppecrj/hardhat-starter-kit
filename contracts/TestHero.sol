// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./Hero.sol";

contract TestHero is Hero {
	uint256 public random;

	function generateRandom() public view override returns (uint256) {
		return random;
	}

	function setRandom(uint256 r) public {
		random = r;
	}
}
