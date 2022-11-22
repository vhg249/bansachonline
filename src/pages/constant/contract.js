import { ethers } from "ethers";

export const CONTRACT_ADDRESS = "0x5144A4992c9257f5b1Af8e51Cba63893E26E458f";
export const PROVIDER = new ethers.providers.Web3Provider(
  window.ethereum,
  "any"
);
export const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email_",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "manufacturerName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "manufacturer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "barcodeId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "productImage",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "NewProduct",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "enum Ecommerce.UserRole",
				"name": "role",
				"type": "uint8"
			}
		],
		"name": "NewUser",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "manufacturerName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "barcodeId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "buyerName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "buyerEmail",
				"type": "string"
			}
		],
		"name": "ProductOwnershipTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "barcodeId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalPrice",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "bought",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			}
		],
		"name": "delivered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "seller",
				"type": "address"
			}
		],
		"name": "registered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "enum Ecommerce.UserRole",
						"name": "role",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "id_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					}
				],
				"internalType": "struct Ecommerce.User",
				"name": "user_",
				"type": "tuple"
			}
		],
		"name": "addParty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "desc",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "manufacturerName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "manufacturer",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "barcodeId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "productImage",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					}
				],
				"internalType": "struct Ecommerce.Product",
				"name": "product_",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "currentTime_",
				"type": "uint256"
			}
		],
		"name": "addProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "enum Ecommerce.UserRole",
						"name": "role",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "id_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					}
				],
				"internalType": "struct Ecommerce.User",
				"name": "user",
				"type": "tuple"
			}
		],
		"name": "addUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "barcodeId_",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "seller",
				"type": "address"
			}
		],
		"name": "buy",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllProducts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "desc",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "manufacturerName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "manufacturer",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "barcodeId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "productImage",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					}
				],
				"internalType": "struct Ecommerce.Product[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "me",
				"type": "address"
			}
		],
		"name": "getMyPartyList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "enum Ecommerce.UserRole",
						"name": "role",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "id_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					}
				],
				"internalType": "struct Ecommerce.User[]",
				"name": "usersList_",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "me",
				"type": "address"
			}
		],
		"name": "getMyProducts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "desc",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "manufacturerName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "manufacturer",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "barcodeId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "productImage",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					}
				],
				"internalType": "struct Ecommerce.Product[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "id_",
				"type": "address"
			}
		],
		"name": "getParty",
		"outputs": [
			{
				"components": [
					{
						"internalType": "enum Ecommerce.UserRole",
						"name": "role",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "id_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					}
				],
				"internalType": "struct Ecommerce.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "barcodeId_",
				"type": "string"
			}
		],
		"name": "getSpecificProduct",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "desc",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "manufacturerName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "manufacturer",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "barcodeId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "productImage",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					}
				],
				"internalType": "struct Ecommerce.Product",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"components": [
							{
								"internalType": "address",
								"name": "id_",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "date",
								"type": "uint256"
							}
						],
						"internalType": "struct Ecommerce.UserHistory",
						"name": "manufacturer",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "id_",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "date",
								"type": "uint256"
							}
						],
						"internalType": "struct Ecommerce.UserHistory",
						"name": "supplier",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "id_",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "date",
								"type": "uint256"
							}
						],
						"internalType": "struct Ecommerce.UserHistory",
						"name": "vendor",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "id_",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "date",
								"type": "uint256"
							}
						],
						"internalType": "struct Ecommerce.UserHistory[]",
						"name": "customers",
						"type": "tuple[]"
					}
				],
				"internalType": "struct Ecommerce.ProductHistory",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "enum Ecommerce.UserRole",
						"name": "role",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "id_",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					}
				],
				"internalType": "struct Ecommerce.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "partyId_",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "barcodeId_",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "currentTime_",
				"type": "uint256"
			}
		],
		"name": "sellProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawMoneyTo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

// export const READ = new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER);
