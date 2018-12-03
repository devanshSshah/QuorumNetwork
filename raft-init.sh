#!/bin/bash
set -u
set -e

echo "[*] Cleaning up temporary data directories"
rm -rf qdata
mkdir -p qdata/logs

echo "[*] Configuring node A (permissioned)"
echo "                                     "
mkdir -p qdata/ddA/{keystore,geth}
cp permissioned-nodes.json qdata/ddA/static-nodes.json
cp permissioned-nodes.json qdata/ddA/
cp keys/key1 qdata/ddA/keystore
cp raft/nodekey1 qdata/ddA/geth/nodekey
./bin/geth --datadir qdata/ddA init genesis.json

echo "[*] Configuring node B (permissioned)"
echo "                                     "
mkdir -p qdata/ddB/{keystore,geth}
cp permissioned-nodes.json qdata/ddB/static-nodes.json
cp permissioned-nodes.json qdata/ddB/
cp keys/key2 qdata/ddB/keystore
cp raft/nodekey2 qdata/ddB/geth/nodekey
./bin/geth --datadir qdata/ddB init genesis.json

echo "[*] Configuring node C (permissioned)"
echo "                                     "
mkdir -p qdata/ddC/{keystore,geth}
cp permissioned-nodes.json qdata/ddC/static-nodes.json
cp permissioned-nodes.json qdata/ddC/
cp keys/key3 qdata/ddC/keystore
cp raft/nodekey3 qdata/ddC/geth/nodekey
./bin/geth --datadir qdata/ddC init genesis.json



#Initialise Tessera configuration
#./tessera-init.sh
