import Web3 from 'web3';
import HDWalletProvider from '@truffle/hdwallet-provider';
const OWNER_PRIVATE_KEY = process.env.OWNER_PRIVATE_KEY;
const CHAIN_URL = process.env.CHAIN_URL;
const MNEMONIC = process.env.MNEMONIC;

// Ensure required environment variables are defined
if (!OWNER_PRIVATE_KEY || !CHAIN_URL || !MNEMONIC) {
    throw new Error("Missing environment variables: OWNER_PRIVATE_KEY or CHAIN_URL or MNEMONIC");
}

const provider = new HDWalletProvider(MNEMONIC, CHAIN_URL);
const web3 = new Web3(provider);

const account = web3.eth.accounts.privateKeyToAccount(OWNER_PRIVATE_KEY);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

export {web3,account}