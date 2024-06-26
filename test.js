const { ethers } = require('ethers');
const logger = require('./logger'); 
const { performance } = require('perf_hooks');
require('dotenv').config();


const no_tx = 5;

async function sendTransactions(no_tx) {
  const provider = new ethers.providers.JsonRpcProvider(process.env.rpc);

  const wallet = new ethers.Wallet(process.env.privateKey, provider);

  const tx = {
    to: '0x49f276554cb1904fd53fbd5ab874d53e76197727', //random address
    value: ethers.utils.parseEther('0.01')
  };

  for (let i = 0; i < no_tx; i++) {
    const startTime = performance.now();

    try {
      const transactionResponse = await wallet.sendTransaction(tx);
      logger.info(`Transaction ${i + 1} sent: ${transactionResponse.hash}`);

      const receipt = await transactionResponse.wait();
      if (receipt.status === 1) {
        logger.info(`Transaction ${i + 1} succeeded!`);
      } else {
        logger.error(`Transaction ${i + 1} failed!`);
      }

      const logData = {
        transactionNumber: i + 1,
        transactionHash: receipt.transactionHash,
        blockNumber: receipt.blockNumber,
        gasUsed: receipt.gasUsed.toString(),
        status: receipt.status,
      };

      logger.info(`Transaction ${i + 1} details: ${JSON.stringify(logData)}`);
    } catch (error) {
      logger.error(`Error sending transaction ${i + 1}: ${error}`);
    }

    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    logger.info(`Total time taken for transaction ${i + 1}: ${timeTaken.toFixed(2)} ms`);
  }
}

sendTransactions(no_tx);
