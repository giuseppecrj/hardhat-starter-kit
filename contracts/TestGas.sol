// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract TestGas {
	uint256 public a;
	uint256 public b;
	uint256 public c;

	function test1() public {
		a++;
	}

	function test2() public {
		a++;
		b++;
	}

	function test3() public {
		a++;
		b++;
		c++;
	}

	function test4() public {
		c = a + b;
	}

	function test5() public {
		test4();
		b = a + c;
	}
}
