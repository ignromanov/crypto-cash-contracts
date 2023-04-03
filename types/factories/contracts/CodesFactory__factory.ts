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
    inputs: [
      {
        internalType: "address",
        name: "CSHTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
  "0x60806040523480156200001157600080fd5b5060405162002357380380620023578339818101604052810190620000379190620001dc565b620000576200004b620000a660201b60201c565b620000ae60201b60201c565b6001808190555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200020e565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001a48262000177565b9050919050565b620001b68162000197565b8114620001c257600080fd5b50565b600081519050620001d681620001ab565b92915050565b600060208284031215620001f557620001f462000172565b5b60006200020584828501620001c5565b91505092915050565b612139806200021e6000396000f3fe6080604052600436106100ab5760003560e01c80638d4e7f42116100645780638d4e7f42146101ea5780638da5cb5b1461021357806399ca856c1461023e578063a2a589961461027b578063d59cd23a146102a4578063f2fde38b146102cd576100b2565b80630255c903146100b45780632c3a04b5146100f157806331091d7a1461012e578063715018a61461016b57806371c5ecb11461018257806385135a1a146101bf576100b2565b366100b257005b005b3480156100c057600080fd5b506100db60048036038101906100d6919061137f565b6102f6565b6040516100e891906113c7565b60405180910390f35b3480156100fd57600080fd5b5061011860048036038101906101139190611447565b610316565b6040516101259190611552565b60405180910390f35b34801561013a57600080fd5b50610155600480360381019061015091906115d2565b610420565b6040516101629190611552565b60405180910390f35b34801561017757600080fd5b506101806104b7565b005b34801561018e57600080fd5b506101a960048036038101906101a49190611635565b6104cb565b6040516101b69190611671565b60405180910390f35b3480156101cb57600080fd5b506101d46104ef565b6040516101e19190611552565b60405180910390f35b3480156101f657600080fd5b50610211600480360381019061020c919061168c565b610547565b005b34801561021f57600080fd5b5061022861066c565b60405161023591906116ee565b60405180910390f35b34801561024a57600080fd5b5061026560048036038101906102609190611709565b610695565b6040516102729190611671565b60405180910390f35b34801561028757600080fd5b506102a2600480360381019061029d919061137f565b6106c6565b005b3480156102b057600080fd5b506102cb60048036038101906102c69190611749565b610806565b005b3480156102d957600080fd5b506102f460048036038101906102ef91906115d2565b61083b565b005b60046020528060005260406000206000915054906101000a900460ff1681565b606060008383905067ffffffffffffffff811115610337576103366117e3565b5b6040519080825280602002602001820160405280156103655781602001602082028036833780820191505090505b5090506000805b85859050811015610411576004600087878481811061038e5761038d611812565b5b90506020020135815260200190815260200160002060009054906101000a900460ff16156103fe578585828181106103c9576103c8611812565b5b905060200201358383815181106103e3576103e2611812565b5b60200260200101818152505081806103fa90611870565b9250505b808061040990611870565b91505061036c565b50808252819250505092915050565b6060600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156104ab57602002820191906000526020600020905b815481526020019060010190808311610497575b50505050509050919050565b6104bf6108bf565b6104c9600061093d565b565b600381815481106104db57600080fd5b906000526020600020016000915090505481565b6060600380548060200260200160405190810160405280929190818152602001828054801561053d57602002820191906000526020600020905b815481526020019060010190808311610529575b5050505050905090565b61054f6108bf565b60038390806001815401808255809150506001900390600052602060002001600090919091909150556000600160038054905061058c91906118b9565b90506000828461059c91906118ed565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930836040518363ffffffff1660e01b81526004016105fb929190611956565b600060405180830381600087803b15801561061557600080fd5b505af1158015610629573d6000803e3d6000fd5b50505050817f14ae70b7538cb704d414f634689a12a1b4ac99bcce8305042069d26ee7fed3f38660405161065d9190611671565b60405180910390a25050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600560205281600052604060002081815481106106b157600080fd5b90600052602060002001600091509150505481565b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060005b818054905081101561078b578282828154811061072c5761072b611812565b5b90600052602060002001541415610778576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076f906119dc565b60405180910390fd5b808061078390611870565b91505061070c565b50808290806001815401808255809150506001900390600052602060002001600090919091909150553373ffffffffffffffffffffffffffffffffffffffff167fd6a9ea2f95505c0e6c18f1ded4c61166279e064d070963821696b7981267dd78836040516107fa9190611671565b60405180910390a25050565b60006108128685610a01565b905060006108238888888787610af7565b905061083187878385610c3b565b5050505050505050565b6108436108bf565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108aa90611a6e565b60405180910390fd5b6108bc8161093d565b50565b6108c7610eb7565b73ffffffffffffffffffffffffffffffffffffffff166108e561066c565b73ffffffffffffffffffffffffffffffffffffffff161461093b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093290611ada565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080610a0e8484610ebf565b90506000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008060005b8380549050811015610aa95784848281548110610a7957610a78611812565b5b90600052602060002001541415610a965780925060019150610aa9565b8080610aa190611870565b915050610a59565b5080610aea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae190611b46565b60405180910390fd5b8194505050505092915050565b60006003805490508610610b40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3790611bb2565b60405180910390fd5b6000610b4c8686610f18565b9050600060038881548110610b6457610b63611812565b5b90600052602060002001549050610b8d81838787610f719190939291909392919063ffffffff16565b610bcc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc390611c1e565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900460ff1615610c2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2490611c8a565b60405180910390fd5b819250505095945050505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610c9891906116ee565b60206040518083038186803b158015610cb057600080fd5b505afa158015610cc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce89190611cbf565b905083811015610d2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2490611d5e565b60405180910390fd5b6000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060018280549050610d8291906118b9565b81548110610d9357610d92611812565b5b9060005260206000200154818481548110610db157610db0611812565b5b906000526020600020018190555080805480610dd057610dcf611d7e565b5b6001900381819060005260206000200160009055905560016004600086815260200190815260200160002060006101000a81548160ff021916908315150217905550610e5f3386600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610f8a9092919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff167fc45f413c8c6d500e3ae937f75df8a60dfb9968add321854bc776ac33a2ef90468787604051610ea7929190611dad565b60405180910390a2505050505050565b600033905090565b60008282604051602001610ed4929190611dad565b60405160208183030381529060405280519060200120604051602001610efa9190611df7565b60405160208183030381529060405280519060200120905092915050565b60008282604051602001610f2d929190611dad565b60405160208183030381529060405280519060200120604051602001610f539190611df7565b60405160208183030381529060405280519060200120905092915050565b600082610f7f868685611010565b149050949350505050565b61100b8363a9059cbb60e01b8484604051602401610fa9929190611956565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611068565b505050565b60008082905060005b8585905081101561105c576110478287878481811061103b5761103a611812565b5b9050602002013561112f565b9150808061105490611870565b915050611019565b50809150509392505050565b60006110ca826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661115a9092919063ffffffff16565b905060008151111561112a57808060200190518101906110ea9190611e3e565b611129576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112090611edd565b60405180910390fd5b5b505050565b6000818310611147576111428284611172565b611152565b6111518383611172565b5b905092915050565b60606111698484600085611189565b90509392505050565b600082600052816020526040600020905092915050565b6060824710156111ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c590611f6f565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516111f79190612009565b60006040518083038185875af1925050503d8060008114611234576040519150601f19603f3d011682016040523d82523d6000602084013e611239565b606091505b509150915061124a87838387611256565b92505050949350505050565b606083156112b9576000835114156112b157611271856112cc565b6112b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112a79061206c565b60405180910390fd5b5b8290506112c4565b6112c383836112ef565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000825111156113025781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133691906120e1565b60405180910390fd5b600080fd5b600080fd5b6000819050919050565b61135c81611349565b811461136757600080fd5b50565b60008135905061137981611353565b92915050565b6000602082840312156113955761139461133f565b5b60006113a38482850161136a565b91505092915050565b60008115159050919050565b6113c1816113ac565b82525050565b60006020820190506113dc60008301846113b8565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112611407576114066113e2565b5b8235905067ffffffffffffffff811115611424576114236113e7565b5b6020830191508360208202830111156114405761143f6113ec565b5b9250929050565b6000806020838503121561145e5761145d61133f565b5b600083013567ffffffffffffffff81111561147c5761147b611344565b5b611488858286016113f1565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6114c981611349565b82525050565b60006114db83836114c0565b60208301905092915050565b6000602082019050919050565b60006114ff82611494565b611509818561149f565b9350611514836114b0565b8060005b8381101561154557815161152c88826114cf565b9750611537836114e7565b925050600181019050611518565b5085935050505092915050565b6000602082019050818103600083015261156c81846114f4565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061159f82611574565b9050919050565b6115af81611594565b81146115ba57600080fd5b50565b6000813590506115cc816115a6565b92915050565b6000602082840312156115e8576115e761133f565b5b60006115f6848285016115bd565b91505092915050565b6000819050919050565b611612816115ff565b811461161d57600080fd5b50565b60008135905061162f81611609565b92915050565b60006020828403121561164b5761164a61133f565b5b600061165984828501611620565b91505092915050565b61166b81611349565b82525050565b60006020820190506116866000830184611662565b92915050565b6000806000606084860312156116a5576116a461133f565b5b60006116b38682870161136a565b93505060206116c486828701611620565b92505060406116d586828701611620565b9150509250925092565b6116e881611594565b82525050565b600060208201905061170360008301846116df565b92915050565b600080604083850312156117205761171f61133f565b5b600061172e858286016115bd565b925050602061173f85828601611620565b9150509250929050565b60008060008060008060a087890312156117665761176561133f565b5b600061177489828a01611620565b965050602061178589828a0161136a565b955050604061179689828a01611620565b94505060606117a789828a01611620565b935050608087013567ffffffffffffffff8111156117c8576117c7611344565b5b6117d489828a016113f1565b92509250509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061187b826115ff565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156118ae576118ad611841565b5b600182019050919050565b60006118c4826115ff565b91506118cf836115ff565b9250828210156118e2576118e1611841565b5b828203905092915050565b60006118f8826115ff565b9150611903836115ff565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561193c5761193b611841565b5b828202905092915050565b611950816115ff565b82525050565b600060408201905061196b60008301856116df565b6119786020830184611947565b9392505050565b600082825260208201905092915050565b7f436f6d6d69746d656e7420616c72656164792065786973747300000000000000600082015250565b60006119c660198361197f565b91506119d182611990565b602082019050919050565b600060208201905081810360008301526119f5816119b9565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611a5860268361197f565b9150611a63826119fc565b604082019050919050565b60006020820190508181036000830152611a8781611a4b565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611ac460208361197f565b9150611acf82611a8e565b602082019050919050565b60006020820190508181036000830152611af381611ab7565b9050919050565b7f496e76616c696420636f6d6d69746d656e740000000000000000000000000000600082015250565b6000611b3060128361197f565b9150611b3b82611afa565b602082019050919050565b60006020820190508181036000830152611b5f81611b23565b9050919050565b7f496e76616c6964204d65726b6c6520726f6f7420696e64657800000000000000600082015250565b6000611b9c60198361197f565b9150611ba782611b66565b602082019050919050565b60006020820190508181036000830152611bcb81611b8f565b9050919050565b7f496e76616c6964204d65726b6c652070726f6f66000000000000000000000000600082015250565b6000611c0860148361197f565b9150611c1382611bd2565b602082019050919050565b60006020820190508181036000830152611c3781611bfb565b9050919050565b7f436f64652068617320616c7265616479206265656e2072656465656d65640000600082015250565b6000611c74601e8361197f565b9150611c7f82611c3e565b602082019050919050565b60006020820190508181036000830152611ca381611c67565b9050919050565b600081519050611cb981611609565b92915050565b600060208284031215611cd557611cd461133f565b5b6000611ce384828501611caa565b91505092915050565b7f4e6f7420656e6f75676820746f6b656e7320696e2074686520636f6e7472616360008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b6000611d4860218361197f565b9150611d5382611cec565b604082019050919050565b60006020820190508181036000830152611d7781611d3b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6000604082019050611dc26000830185611662565b611dcf6020830184611947565b9392505050565b6000819050919050565b611df1611dec82611349565b611dd6565b82525050565b6000611e038284611de0565b60208201915081905092915050565b611e1b816113ac565b8114611e2657600080fd5b50565b600081519050611e3881611e12565b92915050565b600060208284031215611e5457611e5361133f565b5b6000611e6284828501611e29565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611ec7602a8361197f565b9150611ed282611e6b565b604082019050919050565b60006020820190508181036000830152611ef681611eba565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000611f5960268361197f565b9150611f6482611efd565b604082019050919050565b60006020820190508181036000830152611f8881611f4c565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015611fc3578082015181840152602081019050611fa8565b83811115611fd2576000848401525b50505050565b6000611fe382611f8f565b611fed8185611f9a565b9350611ffd818560208601611fa5565b80840191505092915050565b60006120158284611fd8565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612056601d8361197f565b915061206182612020565b602082019050919050565b6000602082019050818103600083015261208581612049565b9050919050565b600081519050919050565b6000601f19601f8301169050919050565b60006120b38261208c565b6120bd818561197f565b93506120cd818560208601611fa5565b6120d681612097565b840191505092915050565b600060208201905081810360008301526120fb81846120a8565b90509291505056fea26469706673582212202840e60cd828716f6e0b22a47817554d0103425b15b7aa1065773ef26e26260c64736f6c63430008090033";

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
    CSHTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CodesFactory> {
    return super.deploy(
      CSHTokenAddress,
      overrides || {}
    ) as Promise<CodesFactory>;
  }
  override getDeployTransaction(
    CSHTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(CSHTokenAddress, overrides || {});
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
