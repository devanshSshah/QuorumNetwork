
First you will need VAGRANT installed in your system. Then download the zip from the below given link:
"https://drive.google.com/open?id=1XdN_c8KJfD8J2_59N25C6U8BXVPPh1W_"

After extracting the folder, run `vagrant up` in a terminal in that folder. 
After it is executed successfully, run the command `vagrant ssh` in the same folder.
 
Then in the vm system, clone the repo as: 
```sh
  git clone  https://github.com/devanshSshah/QuorumNetwork.git
```

Once inside the downloaded repo, run the script `raft-init.sh` and then `raft-start.sh`. This will start your 3 nodes with their datadirectories as ddA, ddB and ddC in the qdata folder.

### Running the Quorum nodes

We can inspect any of the Quorum nodes by using `geth attach` to open the Geth JavaScript console. Node A, Node B and Node C.  

It is recommended to use separate terminal windows for each node we are inspecting.  In each terminal, ensure you are in the `path/to/clonedRepo` directory, then:

- If you aren't already running the example, in terminal 1 run `./raft-init.sh` followed by `./raft-start.sh`
- In terminal 1 run `geth attach ipc:qdata/ddA/geth.ipc` to attach to node A
- In terminal 2 run `geth attach ipc:qdata/ddB/geth.ipc` to attach to node B
- In terminal 3 run `geth attach ipc:qdata/ddC/geth.ipc` to attach to node C

Now from the first terminal, outside the geth js console, run the following command: 
```sh
   ./runscript.sh private-contract.js
```
This will deploy the Auction smart contract on the private network, and will also give you the transaction hash.

To look at the private transaction that was just sent, run the following command in one of the geth js terminals:
```sh
eth.getTransaction("0xe28912c5694a1b8c4944b2252d5af21724e9f9095daab47bac37b1db0340e0bf")
```
where you should replace this hash with the TransactionHash that was previously printed to the terminal.  This will print something of the form:
```sh
{
  blockHash: "0x4d6eb0d0f971b5e0394a49e36ba660c69e62a588323a873bb38610f7b9690b34",
  blockNumber: 1,
  from: "0xed9d02e382b34818e88b88a309c7fe71e65f419d",
  gas: 4700000,
  gasPrice: 0,
  hash: "0xe28912c5694a1b8c4944b2252d5af21724e9f9095daab47bac37b1db0340e0bf",
  input: "0x58c0c680ee0b55673e3127eb26e5e537c973cd97c70ec224ccca586cc4d31ae042d2c55704b881d26ca013f15ade30df2dd196da44368b4a7abfec4a2022ec6f",
  nonce: 0,
  r: "0x4952fd6cd1350c283e9abea95a2377ce24a4540abbbf46b2d7a542be6ed7cce5",
  s: "0x4596f7afe2bd23135fa373399790f2d981a9bb8b06144c91f339be1c31ec5aeb",
  to: null,
  transactionIndex: 0,
  v: "0x25",
  value: 0
}
```

Note the `v` field value of `"0x25"` or `"0x26"` (37 or 38 in decimal) which indicates this transaction has a private payload (input). 



