/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HelloWorld, HelloWorldInterface } from "../HelloWorld";

const _abi = [
  {
    inputs: [],
    name: "hello",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "x",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101df806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630c55699c1461003b57806319ff1d2114610059575b600080fd5b610043610077565b60405161005091906100d3565b60405180910390f35b61006161007d565b60405161006e9190610187565b60405180910390f35b60005481565b60606040518060400160405280600a81526020017f48656c6c6f2c2046454d00000000000000000000000000000000000000000000815250905090565b6000819050919050565b6100cd816100ba565b82525050565b60006020820190506100e860008301846100c4565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561012857808201518184015260208101905061010d565b83811115610137576000848401525b50505050565b6000601f19601f8301169050919050565b6000610159826100ee565b61016381856100f9565b935061017381856020860161010a565b61017c8161013d565b840191505092915050565b600060208201905081810360008301526101a1818461014e565b90509291505056fea264697066735822122004b8f9209c52c58dda8b285060c8c34daa2e47f5fd7d95e86b0c122122cd70e664736f6c634300080a0033";

type HelloWorldConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloWorldConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloWorld__factory extends ContractFactory {
  constructor(...args: HelloWorldConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "HelloWorld";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HelloWorld> {
    return super.deploy(overrides || {}) as Promise<HelloWorld>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HelloWorld {
    return super.attach(address) as HelloWorld;
  }
  connect(signer: Signer): HelloWorld__factory {
    return super.connect(signer) as HelloWorld__factory;
  }
  static readonly contractName: "HelloWorld";
  public readonly contractName: "HelloWorld";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloWorldInterface {
    return new utils.Interface(_abi) as HelloWorldInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelloWorld {
    return new Contract(address, _abi, signerOrProvider) as HelloWorld;
  }
}