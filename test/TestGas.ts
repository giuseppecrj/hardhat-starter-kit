import "@nomiclabs/hardhat-ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("TestGas", function () {
	it("Test", async function () {
		const TestGas = await ethers.getContractFactory("TestGas");
		const test = await TestGas.deploy();
		await test.deployed();
	});
});
