const { ethers } = require('ethers');
const dotenv = require('dotenv').config(); 

const rpcURL = process.env.GOERLI_URL;
//const rpcURL = process.env.POLYGON_URL;
//const rpcURL = process.env.MAINNET_URL;
//const rpcURL = process.env.LOCAL_URL;

const acct = process.env.POLYGON_ACCT; //Test Account address
//Private keys
 const privateKey = process.env.POLYGON_KEY;
//signer account
const provider = new ethers.providers.JsonRpcProvider( rpcURL);
const signer = new ethers.Wallet(privateKey); //
const account = signer.connect(provider);  //The signer is Test Account
//
module.exports.provider = provider;
module.exports.acct = acct;
module.exports.privateKey = privateKey;
module.exports.account = account;
module.exports.signer = signer;

