const { ethers } = require('ethers');
const logger = require('./logger');
const { Command } = require('commander');
require('dotenv').config();

const program = new Command();

program
  .option('-r, --rpc <url>', 'RPC provider URL')
  .option('-a, --address <address>', 'Address to check balance')
  .parse(process.argv);

const options = program.opts();

if (!options.rpc) {
  console.error('RPC provider URL is required (--rpc)');
  process.exit(1);
}

async function testRpcCalls(rpc, address) {
  const provider = new ethers.providers.JsonRpcProvider(rpc);

  try {
    const latestBlockNumber = await provider.getBlockNumber();
    logger.info(`Latest block number: ${latestBlockNumber}`);

    const gasPrice = await provider.getGasPrice();
    logger.info(`Current gas price: ${ethers.utils.formatUnits(gasPrice, 'gwei')} gwei`);

    if (address) {
      const balance = await provider.getBalance(address);
      logger.info(`Balance of ${address}: ${ethers.utils.formatEther(balance)} SHM`);
    }

    const latestBlock = await provider.getBlock(latestBlockNumber);
    logger.info(`Latest block details: ${JSON.stringify(latestBlock, null, 2)}`);

    const network = await provider.getNetwork();
    logger.info(`Network details: ${JSON.stringify(network, null, 2)}`);

  } catch (error) {
    logger.error(`Error in RPC calls: ${error}`);
  }
}

testRpcCalls(options.rpc, options.address);
