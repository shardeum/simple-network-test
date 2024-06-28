# Simple Network Test
A simple script to test test p2p trsnactions and log them.

## Steps to run this test

1. Run a local Shardeum Network & RPC following the instructions [here](https://github.com/shardeum/shardeum).

2. Clone this repositiory

```
git clone https://github.com/shardeum/simple-network-test.git
```

3. Install node modules

```
npm i
```


4. To run a transaction test, use the following command:

```
node tx.js --no_tx 5 --rpc https://your-rpc-url --privateKey yourPrivateKey --amount 1
```


To run a rpc test, use the following command

```
node rpc.js --rpc https://your-rpc-url --address toEthereumAddress
```

