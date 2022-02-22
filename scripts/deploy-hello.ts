import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
	const HelloWorld = await ethers.getContractFactory("HelloWorld");
	const hello = await HelloWorld.deploy();
	await hello.deployed();
	return hello;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function sayHello(hello: any) {
	console.log("Say Hello:", await hello.hello());
}

deploy().then(sayHello);
