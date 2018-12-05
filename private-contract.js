a = eth.accounts[0]
web3.eth.defaultAccount = a;

var abi = [{       "constant": false,
		"inputs": [],
		"name": "getItemPrice",
		"outputs": [{"name": "","type": "uint256"}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{"name": "_bidAmt","type": "uint256"}],
		"name": "bid",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{"name": "_price","type": "uint256"}],
		"name": "setItem",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{"name": "_address","type": "address"}],
		"name": "getBid",
		"outputs": [{"name": "","type": "uint256"}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}];

var bytecode = "0x606060405273ed9d02e382b34818e88b88a309c7fe71e65f419d6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073ca843569e3427144cead5e4d5999a3d0ccf92b8e600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550730fbdc686b912d7722dc86510934589e0aaf3b55a600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550341561010d57600080fd5b6101f38061011c6000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632083ad8214610067578063454a2ab314610090578063822a634a146100b3578063c8b342ab146100d6575b600080fd5b341561007257600080fd5b61007a610123565b6040518082815260200191505060405180910390f35b341561009b57600080fd5b6100b1600480803590602001909190505061012d565b005b34156100be57600080fd5b6100d46004808035906020019091905050610174565b005b34156100e157600080fd5b61010d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061017e565b6040518082815260200191505060405180910390f35b6000600354905090565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b8060038190555050565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a723058205f89b2e84395adc46e8597ce526197116535e5b37abdfd89f3b990db7c6cde620029";

var Contract = web3.eth.contract(abi);
var deployContract = Contract.new({from:web3.eth.accounts[0], data: bytecode, gas: 0x47b760, privateFor: ["QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=","1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg="]}, function(e, contract) {
	if (e) {
		console.log("err creating contract", e);
	} else {
		if (!contract.address) {
			console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
		} else {
			console.log("Contract mined! Address: " + contract.address);
			console.log(contract);
		}
	}
});
