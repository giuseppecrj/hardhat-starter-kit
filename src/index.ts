/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ethers } from "ethers";
import Counter from "../artifacts/contracts/Counter.sol/Counter.json";

function getEth() {
	//@ts-ignore
	const eth = window.ethereum;
	if (!eth) throw new Error("get metamask");
	return eth;
}

async function calMetamask(method: string): Promise<boolean> {
	const metamask = getEth();

	const result = await (metamask.request({
		method
	}) as Promise<string>);

	return !!result && result.length > 0;
}

async function getContract() {
	const address = process.env.CONTRACT_ADDRESS as string;

	if (
		!(await calMetamask("eth_accounts")) &&
		!(await calMetamask("eth_requestAccounts"))
	) {
		throw new Error("Please let me take your money");
	}

	const provider = new ethers.providers.Web3Provider(getEth());
	const signer = provider.getSigner();

	const contract = new ethers.Contract(address, Counter.abi, signer);
	console.log("We have done it, time to call");

	const el = document.createElement("div");

	async function setCounter(count?: number) {
		el.innerHTML = count || (await contract.getCounter());
	}

	setCounter();
	const button = document.createElement("button");
	button.innerText = "increment";
	button.onclick = async function () {
		await contract.count();
	};

	contract.on(contract.filters.CounterInc(), function (count: number) {
		setCounter(count);
	});

	document.body.appendChild(el);
	document.body.appendChild(button);
}

getContract();
