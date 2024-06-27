# Simple Network Test
A simple script to test test p2p trsnactions and log them.

## Steps to run this test

1. Run a local Shardeum Network & RPC following the instructions [here](https://github.com/shardeum/shardeum).

2. Clone this repositiory

`
git clone https://github.com/shardeum/simple-network-test.git
`

3. Install node modules

`
npm i
`

4. Add the details in env file

`
privateKey=YOUR_PRIVATE_KEY
rpc=YOUR_LOCAL_RPC_ENDPOINT
tx_no=NUMBER_OF_TRANSACTIONS
`

5. Run the script

`
node tx.js
`