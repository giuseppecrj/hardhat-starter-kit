import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { A, B } from "../typechain-types";

async function deploy(name: string, ...args) {
	const Contract = await ethers.getContractFactory(name);
	const contract = await Contract.deploy(...args);
	await contract.deployed();

	console.log(contract.address);

	return contract;
}

async function printStorage(contract, name, count) {
	for (let i = 0; i < count; i++) {
		console.log(
			name,
			i,
			await ethers.provider.getStorageAt(contract.address, i)
		);
	}
}

async function fallback() {
	const a = (await deploy("A")) as A;
	const b = (await deploy("B", a.address)) as B;

	await printStorage(b, "B", 3);
	await b.setB(0x45);
	console.log("-------------");
	await printStorage(b, "B", 3);

	// console.log("A", await a.getA());
	// console.log("B", await b.getB());
	// console.log("------------------");

	// await a.setA(42);
	// console.log("A", await a.getA());
	// console.log("B", await b.getB());
	// console.log("------------------");

	// await b.setB(60);
	// await b.setB(60);
	// console.log("A", await a.getA());
	// console.log("B", await b.getB());
	// console.log("------------------");
}

fallback();
