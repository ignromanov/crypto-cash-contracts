/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  CodesFactory,
  CodesFactoryInterface,
} from "../../contracts/CodesFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "redeemer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "secretCode",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CodeRedeemed",
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
        internalType: "uint256",
        name: "merkleRootIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
    ],
    name: "MerkleRootAdded",
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
    ],
    name: "UserCommitmentAdded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "numberOfCodes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "addMerkleRoot",
    outputs: [],
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnTokensTestnetOnly",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
    ],
    name: "commitCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "commitments",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMerkleRoots",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "leaves",
        type: "bytes32[]",
      },
    ],
    name: "getRedeemedLeaves",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserCommitments",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "CSHTokenAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "merkleRootTokenAmounts",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "merkleRoots",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "redeemedLeaves",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "merkleRootIndex",
        type: "uint256",
      },
    ],
    name: "removeMerkleRootTestnetOnly",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "merkleRootIndex",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "secretCode",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "revealCode",
    outputs: [],
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
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061258c806100206000396000f3fe6080604052600436106100f75760003560e01c80638d4e7f421161008a578063c4d66de811610059578063c4d66de814610356578063d59cd23a1461037f578063ece4371c146103a8578063f2fde38b146103d1576100fe565b80638d4e7f421461029c5780638da5cb5b146102c557806399ca856c146102f0578063a2a589961461032d576100fe565b806348eb0799116100c657806348eb0799146101f4578063715018a61461021d57806371c5ecb11461023457806385135a1a14610271576100fe565b80630255c903146101005780632c3a04b51461013d57806331091d7a1461017a5780633172b250146101b7576100fe565b366100fe57005b005b34801561010c57600080fd5b5061012760048036038101906101229190611852565b6103fa565b604051610134919061189a565b60405180910390f35b34801561014957600080fd5b50610164600480360381019061015f919061191a565b61041a565b6040516101719190611a25565b60405180910390f35b34801561018657600080fd5b506101a1600480360381019061019c9190611aa5565b610524565b6040516101ae9190611a25565b60405180910390f35b3480156101c357600080fd5b506101de60048036038101906101d99190611852565b6105bb565b6040516101eb9190611aeb565b60405180910390f35b34801561020057600080fd5b5061021b60048036038101906102169190611b32565b6105d3565b005b34801561022957600080fd5b50610232610782565b005b34801561024057600080fd5b5061025b60048036038101906102569190611b32565b610796565b6040516102689190611b6e565b60405180910390f35b34801561027d57600080fd5b506102866107ba565b6040516102939190611a25565b60405180910390f35b3480156102a857600080fd5b506102c360048036038101906102be9190611b89565b610812565b005b3480156102d157600080fd5b506102da61094f565b6040516102e79190611beb565b60405180910390f35b3480156102fc57600080fd5b5061031760048036038101906103129190611c06565b610979565b6040516103249190611b6e565b60405180910390f35b34801561033957600080fd5b50610354600480360381019061034f9190611852565b6109aa565b005b34801561036257600080fd5b5061037d60048036038101906103789190611aa5565b610aea565b005b34801561038b57600080fd5b506103a660048036038101906103a19190611c46565b610c72565b005b3480156103b457600080fd5b506103cf60048036038101906103ca9190611c06565b610ca7565b005b3480156103dd57600080fd5b506103f860048036038101906103f39190611aa5565b610e35565b005b60996020528060005260406000206000915054906101000a900460ff1681565b606060008383905067ffffffffffffffff81111561043b5761043a611ce0565b5b6040519080825280602002602001820160405280156104695781602001602082028036833780820191505090505b5090506000805b85859050811015610515576099600087878481811061049257610491611d0f565b5b90506020020135815260200190815260200160002060009054906101000a900460ff1615610502578585828181106104cd576104cc611d0f565b5b905060200201358383815181106104e7576104e6611d0f565b5b60200260200101818152505081806104fe90611d6d565b9250505b808061050d90611d6d565b915050610470565b50808252819250505092915050565b6060609a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156105af57602002820191906000526020600020905b81548152602001906001019080831161059b575b50505050509050919050565b609b6020528060005260406000206000915090505481565b6105db610eb9565b6098805490508110610622576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061990611e13565b60405180910390fd5b60006098828154811061063857610637611d0f565b5b906000526020600020015490506000609b6000838152602001908152602001600020549050609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639dc29fac30836040518363ffffffff1660e01b81526004016106ba929190611e33565b600060405180830381600087803b1580156106d457600080fd5b505af11580156106e8573d6000803e3d6000fd5b50505050609860016098805490506107009190611e5c565b8154811061071157610710611d0f565b5b9060005260206000200154609884815481106107305761072f611d0f565b5b906000526020600020018190555060988054806107505761074f611e90565b5b60019003818190600052602060002001600090559055609b600083815260200190815260200160002060009055505050565b61078a610eb9565b6107946000610f37565b565b609881815481106107a657600080fd5b906000526020600020016000915090505481565b6060609880548060200260200160405190810160405280929190818152602001828054801561080857602002820191906000526020600020905b8154815260200190600101908083116107f4575b5050505050905090565b61081a610eb9565b6098839080600181540180825580915050600190039060005260206000200160009091909190915055600060016098805490506108579190611e5c565b9050600082846108679190611ebf565b9050609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930836040518363ffffffff1660e01b81526004016108c6929190611e33565b600060405180830381600087803b1580156108e057600080fd5b505af11580156108f4573d6000803e3d6000fd5b5050505080609b600087815260200190815260200160002081905550817f14ae70b7538cb704d414f634689a12a1b4ac99bcce8305042069d26ee7fed3f3866040516109409190611b6e565b60405180910390a25050505050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b609a602052816000526040600020818154811061099557600080fd5b90600052602060002001600091509150505481565b6000609a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060005b8180549050811015610a6f5782828281548110610a1057610a0f611d0f565b5b90600052602060002001541415610a5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5390611f65565b60405180910390fd5b8080610a6790611d6d565b9150506109f0565b50808290806001815401808255809150506001900390600052602060002001600090919091909150553373ffffffffffffffffffffffffffffffffffffffff167fd6a9ea2f95505c0e6c18f1ded4c61166279e064d070963821696b7981267dd7883604051610ade9190611b6e565b60405180910390a25050565b60008060019054906101000a900460ff16159050808015610b1b5750600160008054906101000a900460ff1660ff16105b80610b485750610b2a30610ffd565b158015610b475750600160008054906101000a900460ff1660ff16145b5b610b87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7e90611ff7565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610bc4576001600060016101000a81548160ff0219169083151502179055505b610bcc611020565b610bd4611079565b81609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015610c6e5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610c659190612069565b60405180910390a15b5050565b6000610c7e86856110d2565b90506000610c8f88888887876111c8565b9050610c9d8787838561130c565b5050505050505050565b610caf610eb9565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b8152600401610d0c9190611beb565b60206040518083038186803b158015610d2457600080fd5b505afa158015610d38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5c9190612099565b905081811015610da1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9890612112565b60405180910390fd5b609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639dc29fac84846040518363ffffffff1660e01b8152600401610dfe929190611e33565b600060405180830381600087803b158015610e1857600080fd5b505af1158015610e2c573d6000803e3d6000fd5b50505050505050565b610e3d610eb9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ead576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ea4906121a4565b60405180910390fd5b610eb681610f37565b50565b610ec16115eb565b73ffffffffffffffffffffffffffffffffffffffff16610edf61094f565b73ffffffffffffffffffffffffffffffffffffffff1614610f35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2c90612210565b60405180910390fd5b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff1661106f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611066906122a2565b60405180910390fd5b6110776115f3565b565b600060019054906101000a900460ff166110c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110bf906122a2565b60405180910390fd5b6110d0611654565b565b6000806110df84846116ad565b90506000609a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008060005b838054905081101561117a578484828154811061114a57611149611d0f565b5b90600052602060002001541415611167578092506001915061117a565b808061117290611d6d565b91505061112a565b50806111bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b29061230e565b60405180910390fd5b8194505050505092915050565b60006098805490508610611211576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120890611e13565b60405180910390fd5b600061121d8686611706565b905060006098888154811061123557611234611d0f565b5b9060005260206000200154905061125e8183878761175f9190939291909392919063ffffffff16565b61129d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112949061237a565b60405180910390fd5b6099600083815260200190815260200160002060009054906101000a900460ff16156112fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112f5906123e6565b60405180910390fd5b819250505095945050505050565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016113699190611beb565b60206040518083038186803b15801561138157600080fd5b505afa158015611395573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b99190612099565b9050838110156113fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113f590612478565b60405180910390fd5b6000609a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905080600182805490506114539190611e5c565b8154811061146457611463611d0f565b5b906000526020600020015481848154811061148257611481611d0f565b5b9060005260206000200181905550808054806114a1576114a0611e90565b5b6001900381819060005260206000200160009055905560016099600086815260200190815260200160002060006101000a81548160ff021916908315150217905550609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33876040518363ffffffff1660e01b8152600401611540929190611e33565b602060405180830381600087803b15801561155a57600080fd5b505af115801561156e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061159291906124c4565b503373ffffffffffffffffffffffffffffffffffffffff167fc45f413c8c6d500e3ae937f75df8a60dfb9968add321854bc776ac33a2ef904687876040516115db9291906124f1565b60405180910390a2505050505050565b600033905090565b600060019054906101000a900460ff16611642576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611639906122a2565b60405180910390fd5b61165261164d6115eb565b610f37565b565b600060019054906101000a900460ff166116a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169a906122a2565b60405180910390fd5b6001606581905550565b600082826040516020016116c29291906124f1565b604051602081830303815290604052805190602001206040516020016116e8919061253b565b60405160208183030381529060405280519060200120905092915050565b6000828260405160200161171b9291906124f1565b60405160208183030381529060405280519060200120604051602001611741919061253b565b60405160208183030381529060405280519060200120905092915050565b60008261176d868685611778565b149050949350505050565b60008082905060005b858590508110156117c4576117af828787848181106117a3576117a2611d0f565b5b905060200201356117d0565b915080806117bc90611d6d565b915050611781565b50809150509392505050565b60008183106117e8576117e382846117fb565b6117f3565b6117f283836117fb565b5b905092915050565b600082600052816020526040600020905092915050565b600080fd5b600080fd5b6000819050919050565b61182f8161181c565b811461183a57600080fd5b50565b60008135905061184c81611826565b92915050565b60006020828403121561186857611867611812565b5b60006118768482850161183d565b91505092915050565b60008115159050919050565b6118948161187f565b82525050565b60006020820190506118af600083018461188b565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126118da576118d96118b5565b5b8235905067ffffffffffffffff8111156118f7576118f66118ba565b5b602083019150836020820283011115611913576119126118bf565b5b9250929050565b6000806020838503121561193157611930611812565b5b600083013567ffffffffffffffff81111561194f5761194e611817565b5b61195b858286016118c4565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61199c8161181c565b82525050565b60006119ae8383611993565b60208301905092915050565b6000602082019050919050565b60006119d282611967565b6119dc8185611972565b93506119e783611983565b8060005b83811015611a185781516119ff88826119a2565b9750611a0a836119ba565b9250506001810190506119eb565b5085935050505092915050565b60006020820190508181036000830152611a3f81846119c7565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a7282611a47565b9050919050565b611a8281611a67565b8114611a8d57600080fd5b50565b600081359050611a9f81611a79565b92915050565b600060208284031215611abb57611aba611812565b5b6000611ac984828501611a90565b91505092915050565b6000819050919050565b611ae581611ad2565b82525050565b6000602082019050611b006000830184611adc565b92915050565b611b0f81611ad2565b8114611b1a57600080fd5b50565b600081359050611b2c81611b06565b92915050565b600060208284031215611b4857611b47611812565b5b6000611b5684828501611b1d565b91505092915050565b611b688161181c565b82525050565b6000602082019050611b836000830184611b5f565b92915050565b600080600060608486031215611ba257611ba1611812565b5b6000611bb08682870161183d565b9350506020611bc186828701611b1d565b9250506040611bd286828701611b1d565b9150509250925092565b611be581611a67565b82525050565b6000602082019050611c006000830184611bdc565b92915050565b60008060408385031215611c1d57611c1c611812565b5b6000611c2b85828601611a90565b9250506020611c3c85828601611b1d565b9150509250929050565b60008060008060008060a08789031215611c6357611c62611812565b5b6000611c7189828a01611b1d565b9650506020611c8289828a0161183d565b9550506040611c9389828a01611b1d565b9450506060611ca489828a01611b1d565b935050608087013567ffffffffffffffff811115611cc557611cc4611817565b5b611cd189828a016118c4565b92509250509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611d7882611ad2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611dab57611daa611d3e565b5b600182019050919050565b600082825260208201905092915050565b7f496e76616c6964204d65726b6c6520726f6f7420696e64657800000000000000600082015250565b6000611dfd601983611db6565b9150611e0882611dc7565b602082019050919050565b60006020820190508181036000830152611e2c81611df0565b9050919050565b6000604082019050611e486000830185611bdc565b611e556020830184611adc565b9392505050565b6000611e6782611ad2565b9150611e7283611ad2565b925082821015611e8557611e84611d3e565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6000611eca82611ad2565b9150611ed583611ad2565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611f0e57611f0d611d3e565b5b828202905092915050565b7f436f6d6d69746d656e7420616c72656164792065786973747300000000000000600082015250565b6000611f4f601983611db6565b9150611f5a82611f19565b602082019050919050565b60006020820190508181036000830152611f7e81611f42565b9050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000611fe1602e83611db6565b9150611fec82611f85565b604082019050919050565b6000602082019050818103600083015261201081611fd4565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b600061205361204e61204984612017565b61202e565b612021565b9050919050565b61206381612038565b82525050565b600060208201905061207e600083018461205a565b92915050565b60008151905061209381611b06565b92915050565b6000602082840312156120af576120ae611812565b5b60006120bd84828501612084565b91505092915050565b7f4e6f7420656e6f75676820746f6b656e7320746f206275726e00000000000000600082015250565b60006120fc601983611db6565b9150612107826120c6565b602082019050919050565b6000602082019050818103600083015261212b816120ef565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061218e602683611db6565b915061219982612132565b604082019050919050565b600060208201905081810360008301526121bd81612181565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006121fa602083611db6565b9150612205826121c4565b602082019050919050565b60006020820190508181036000830152612229816121ed565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b600061228c602b83611db6565b915061229782612230565b604082019050919050565b600060208201905081810360008301526122bb8161227f565b9050919050565b7f496e76616c696420636f6d6d69746d656e740000000000000000000000000000600082015250565b60006122f8601283611db6565b9150612303826122c2565b602082019050919050565b60006020820190508181036000830152612327816122eb565b9050919050565b7f496e76616c6964204d65726b6c652070726f6f66000000000000000000000000600082015250565b6000612364601483611db6565b915061236f8261232e565b602082019050919050565b6000602082019050818103600083015261239381612357565b9050919050565b7f436f64652068617320616c7265616479206265656e2072656465656d65640000600082015250565b60006123d0601e83611db6565b91506123db8261239a565b602082019050919050565b600060208201905081810360008301526123ff816123c3565b9050919050565b7f4e6f7420656e6f75676820746f6b656e7320696e2074686520636f6e7472616360008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b6000612462602183611db6565b915061246d82612406565b604082019050919050565b6000602082019050818103600083015261249181612455565b9050919050565b6124a18161187f565b81146124ac57600080fd5b50565b6000815190506124be81612498565b92915050565b6000602082840312156124da576124d9611812565b5b60006124e8848285016124af565b91505092915050565b60006040820190506125066000830185611b5f565b6125136020830184611adc565b9392505050565b6000819050919050565b6125356125308261181c565b61251a565b82525050565b60006125478284612524565b6020820191508190509291505056fea26469706673582212201a42e8d0af2fc38358f175025b71f4f44d0419d455cc577889d8fd865494168a64736f6c63430008090033";

type CodesFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CodesFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CodesFactory__factory extends ContractFactory {
  constructor(...args: CodesFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CodesFactory> {
    return super.deploy(overrides || {}) as Promise<CodesFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CodesFactory {
    return super.attach(address) as CodesFactory;
  }
  override connect(signer: Signer): CodesFactory__factory {
    return super.connect(signer) as CodesFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CodesFactoryInterface {
    return new utils.Interface(_abi) as CodesFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CodesFactory {
    return new Contract(address, _abi, signerOrProvider) as CodesFactory;
  }
}
