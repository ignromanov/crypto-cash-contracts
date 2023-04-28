/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { CSHToken, CSHTokenInterface } from "../../contracts/CSHToken";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousCodesFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCodesFactory",
        type: "address",
      },
    ],
    name: "CodesFactoryChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAuthorizedMinter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAuthorizedMinter",
        type: "address",
      },
    ],
    name: "setAuthorizedMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506123db806100206000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad5780639dc29fac116100715780639dc29fac146102e6578063a457c2d714610302578063a9059cbb14610332578063dd62ed3e14610362578063f2fde38b1461039257610121565b806370a0823114610266578063715018a6146102965780638129fc1c146102a05780638da5cb5b146102aa57806395d89b41146102c857610121565b80631928b7c3116100f45780631928b7c3146101b057806323b872dd146101cc578063313ce567146101fc578063395093511461021a57806340c10f191461024a57610121565b806306fdde0314610126578063095ea7b3146101445780630d9581231461017457806318160ddd14610192575b600080fd5b61012e6103ae565b60405161013b91906117c7565b60405180910390f35b61015e60048036038101906101599190611882565b610440565b60405161016b91906118dd565b60405180910390f35b61017c610463565b6040516101899190611907565b60405180910390f35b61019a61048d565b6040516101a79190611931565b60405180910390f35b6101ca60048036038101906101c5919061194c565b610497565b005b6101e660048036038101906101e19190611979565b610565565b6040516101f391906118dd565b60405180910390f35b610204610594565b60405161021191906119e8565b60405180910390f35b610234600480360381019061022f9190611882565b61059d565b60405161024191906118dd565b60405180910390f35b610264600480360381019061025f9190611882565b6105d4565b005b610280600480360381019061027b919061194c565b610672565b60405161028d9190611931565b60405180910390f35b61029e6106bb565b005b6102a86106cf565b005b6102b2610881565b6040516102bf9190611907565b60405180910390f35b6102d06108ab565b6040516102dd91906117c7565b60405180910390f35b61030060048036038101906102fb9190611882565b61093d565b005b61031c60048036038101906103179190611882565b6109db565b60405161032991906118dd565b60405180910390f35b61034c60048036038101906103479190611882565b610a52565b60405161035991906118dd565b60405180910390f35b61037c60048036038101906103779190611a03565b610a75565b6040516103899190611931565b60405180910390f35b6103ac60048036038101906103a7919061194c565b610afc565b005b6060603680546103bd90611a72565b80601f01602080910402602001604051908101604052809291908181526020018280546103e990611a72565b80156104365780601f1061040b57610100808354040283529160200191610436565b820191906000526020600020905b81548152906001019060200180831161041957829003601f168201915b5050505050905090565b60008061044b610b80565b9050610458818585610b88565b600191505092915050565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000603554905090565b61049f610d53565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f6291bbe58e3c16bc4b83e3f8db1e536b072dde433dfab5f048c0344fec77cf4c60405160405180910390a35050565b600080610570610b80565b905061057d858285610dd1565b610588858585610e5d565b60019150509392505050565b60006012905090565b6000806105a8610b80565b90506105c98185856105ba8589610a75565b6105c49190611ad3565b610b88565b600191505092915050565b609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610664576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065b90611b9b565b60405180910390fd5b61066e82826110d8565b5050565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106c3610d53565b6106cd6000611230565b565b60008060019054906101000a900460ff161590508080156107005750600160008054906101000a900460ff1660ff16105b8061072d575061070f306112f6565b15801561072c5750600160008054906101000a900460ff1660ff16145b5b61076c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076390611c2d565b60405180910390fd5b60016000806101000a81548160ff021916908360ff16021790555080156107a9576001600060016101000a81548160ff0219169083151502179055505b61081d6040518060400160405280601081526020017f43727970746f4361736820546f6b656e000000000000000000000000000000008152506040518060400160405280600381526020017f4353480000000000000000000000000000000000000000000000000000000000815250611319565b610825611376565b801561087e5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516108759190611c92565b60405180910390a15b50565b6000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060603780546108ba90611a72565b80601f01602080910402602001604051908101604052809291908181526020018280546108e690611a72565b80156109335780601f1061090857610100808354040283529160200191610933565b820191906000526020600020905b81548152906001019060200180831161091657829003601f168201915b5050505050905090565b609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c490611b9b565b60405180910390fd5b6109d782826113cf565b5050565b6000806109e6610b80565b905060006109f48286610a75565b905083811015610a39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3090611d1f565b60405180910390fd5b610a468286868403610b88565b60019250505092915050565b600080610a5d610b80565b9050610a6a818585610e5d565b600191505092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610b04610d53565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6b90611db1565b60405180910390fd5b610b7d81611230565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610bf8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bef90611e43565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5f90611ed5565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610d469190611931565b60405180910390a3505050565b610d5b610b80565b73ffffffffffffffffffffffffffffffffffffffff16610d79610881565b73ffffffffffffffffffffffffffffffffffffffff1614610dcf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc690611f41565b60405180910390fd5b565b6000610ddd8484610a75565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610e575781811015610e49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4090611fad565b60405180910390fd5b610e568484848403610b88565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ecd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec49061203f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f34906120d1565b60405180910390fd5b610f4883838361159f565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610fcf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fc690612163565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110bf9190611931565b60405180910390a36110d28484846115a4565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611148576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113f906121cf565b60405180910390fd5b6111546000838361159f565b80603560008282546111669190611ad3565b9250508190555080603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516112189190611931565b60405180910390a361122c600083836115a4565b5050565b6000606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611368576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135f90612261565b60405180910390fd5b61137282826115a9565b5050565b600060019054906101000a900460ff166113c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113bc90612261565b60405180910390fd5b6113cd61162a565b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561143f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611436906122f3565b60405180910390fd5b61144b8260008361159f565b6000603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156114d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114c990612385565b60405180910390fd5b818103603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603560008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516115869190611931565b60405180910390a361159a836000846115a4565b505050565b505050565b505050565b600060019054906101000a900460ff166115f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ef90612261565b60405180910390fd5b816036908051906020019061160e92919061168b565b50806037908051906020019061162592919061168b565b505050565b600060019054906101000a900460ff16611679576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167090612261565b60405180910390fd5b611689611684610b80565b611230565b565b82805461169790611a72565b90600052602060002090601f0160209004810192826116b95760008555611700565b82601f106116d257805160ff1916838001178555611700565b82800160010185558215611700579182015b828111156116ff5782518255916020019190600101906116e4565b5b50905061170d9190611711565b5090565b5b8082111561172a576000816000905550600101611712565b5090565b600081519050919050565b600082825260208201905092915050565b60005b8381101561176857808201518184015260208101905061174d565b83811115611777576000848401525b50505050565b6000601f19601f8301169050919050565b60006117998261172e565b6117a38185611739565b93506117b381856020860161174a565b6117bc8161177d565b840191505092915050565b600060208201905081810360008301526117e1818461178e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611819826117ee565b9050919050565b6118298161180e565b811461183457600080fd5b50565b60008135905061184681611820565b92915050565b6000819050919050565b61185f8161184c565b811461186a57600080fd5b50565b60008135905061187c81611856565b92915050565b60008060408385031215611899576118986117e9565b5b60006118a785828601611837565b92505060206118b88582860161186d565b9150509250929050565b60008115159050919050565b6118d7816118c2565b82525050565b60006020820190506118f260008301846118ce565b92915050565b6119018161180e565b82525050565b600060208201905061191c60008301846118f8565b92915050565b61192b8161184c565b82525050565b60006020820190506119466000830184611922565b92915050565b600060208284031215611962576119616117e9565b5b600061197084828501611837565b91505092915050565b600080600060608486031215611992576119916117e9565b5b60006119a086828701611837565b93505060206119b186828701611837565b92505060406119c28682870161186d565b9150509250925092565b600060ff82169050919050565b6119e2816119cc565b82525050565b60006020820190506119fd60008301846119d9565b92915050565b60008060408385031215611a1a57611a196117e9565b5b6000611a2885828601611837565b9250506020611a3985828601611837565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611a8a57607f821691505b60208210811415611a9e57611a9d611a43565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611ade8261184c565b9150611ae98361184c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611b1e57611b1d611aa4565b5b828201905092915050565b7f4f6e6c7920417574686f72697a65644d696e7465722063616e206d696e74207460008201527f6f6b656e73000000000000000000000000000000000000000000000000000000602082015250565b6000611b85602583611739565b9150611b9082611b29565b604082019050919050565b60006020820190508181036000830152611bb481611b78565b9050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000611c17602e83611739565b9150611c2282611bbb565b604082019050919050565b60006020820190508181036000830152611c4681611c0a565b9050919050565b6000819050919050565b6000819050919050565b6000611c7c611c77611c7284611c4d565b611c57565b6119cc565b9050919050565b611c8c81611c61565b82525050565b6000602082019050611ca76000830184611c83565b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611d09602583611739565b9150611d1482611cad565b604082019050919050565b60006020820190508181036000830152611d3881611cfc565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611d9b602683611739565b9150611da682611d3f565b604082019050919050565b60006020820190508181036000830152611dca81611d8e565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611e2d602483611739565b9150611e3882611dd1565b604082019050919050565b60006020820190508181036000830152611e5c81611e20565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ebf602283611739565b9150611eca82611e63565b604082019050919050565b60006020820190508181036000830152611eee81611eb2565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611f2b602083611739565b9150611f3682611ef5565b602082019050919050565b60006020820190508181036000830152611f5a81611f1e565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611f97601d83611739565b9150611fa282611f61565b602082019050919050565b60006020820190508181036000830152611fc681611f8a565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612029602583611739565b915061203482611fcd565b604082019050919050565b600060208201905081810360008301526120588161201c565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006120bb602383611739565b91506120c68261205f565b604082019050919050565b600060208201905081810360008301526120ea816120ae565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061214d602683611739565b9150612158826120f1565b604082019050919050565b6000602082019050818103600083015261217c81612140565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006121b9601f83611739565b91506121c482612183565b602082019050919050565b600060208201905081810360008301526121e8816121ac565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b600061224b602b83611739565b9150612256826121ef565b604082019050919050565b6000602082019050818103600083015261227a8161223e565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006122dd602183611739565b91506122e882612281565b604082019050919050565b6000602082019050818103600083015261230c816122d0565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b600061236f602283611739565b915061237a82612313565b604082019050919050565b6000602082019050818103600083015261239e81612362565b905091905056fea26469706673582212209b01d809b6db6f0ad165bd80defc7553f73026c6bb1074e1c71793527cc5237d64736f6c63430008090033";

type CSHTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CSHTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CSHToken__factory extends ContractFactory {
  constructor(...args: CSHTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CSHToken> {
    return super.deploy(overrides || {}) as Promise<CSHToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CSHToken {
    return super.attach(address) as CSHToken;
  }
  override connect(signer: Signer): CSHToken__factory {
    return super.connect(signer) as CSHToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CSHTokenInterface {
    return new utils.Interface(_abi) as CSHTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CSHToken {
    return new Contract(address, _abi, signerOrProvider) as CSHToken;
  }
}
