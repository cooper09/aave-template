const { Pool } = require('@aave/contract-helpers');
const { ethers, VoidSigner } = require('ethers');
require('dotenv').config();

const {v1, v2} = require('@aave/protocol-js')

/***********************************************************************************/ 

// set up prvider, primary and secondary addresses
const {provider, acct, privateKey, signer, account } = require("./modules/accts");
// Set up contracts 
const {wethAddr, wethArtifact, daiArtifact,daiContract, router } = require("./modules/contracts")
// utils generic ethers tools for formatting 
const {toBytes32, toString, toWei, toEther, toRound } = require('./modules/utils');

const {logger} = require('./modules/logger');
/********************************************************************* */
const tokenAddr="0x2e3A2fb8473316A02b8A297B982498E661E1f6f5" //Goerli Weth
const poolProviderAddr = "0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D"//Goerli pool provider
const gatewayAddr = '0x3bd3a20Ac9Ff1dda1D99C0dFCE6D65C4960B3627'

const IPoolAddressProvider = require("./abis/AddressProvider.json");
const IPool = require("./abis/Pool.json");
const IERC20 = require("./abis/ERC20.json");
const IWETHGateway = require("./abis/WETHGateway.json");

const getPoolContract = async (provider) =>{
    const addr = poolProviderAddr
    const abi = IPoolAddressProvider.abi
    try {
        const pool_addr_prov = new ethers.Contract(addr, abi, provider);
        const pool_addr = await pool_addr_prov.getPool()
        console.log("getPoolContract address: ", pool_addr)
        const pool = new ethers.Contract(pool_addr, IPool.abi, provider.getSigner());
        //console.log("getPoolContract pool: ", pool )
        return pool;
    } catch (error) {
        console.error("create pool: ",error) 
    }
}//end getPoolContract

//const depositETHTx  = await depositETHtoAave( toWei("0.001") ,poolAddress, account, 0 )

const depositETHtoAave = async (amount, poolAddr, wallet, referralCode = 0)=>{
    console.log("depositETHtoAave: ");
    const pool = await getPoolContract(provider);
    const contract = new ethers.Contract(gatewayAddr, IWETHGateway.abi, provider.getSigner())
   try {

    //const tx = await contract.depositETH(pool.address, contract.address, referralCode, { value: amount })
    //const tx = await pool.depositETH(contract, signer.address , referralCode, { value: amount })

   const tx = await contract.depositETH(
        //"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",toWei("0.001"), 0)//.send({from: signer, value: supplyValue})
        amount, poolAddr,  0)//.send({from: signer, value: supplyValue})
         .then (result => {
             console.log("transaction mined....");
             console.log("deposit result: ", result.hash  );
             console.log("block number: ", result )
        }) 
    


} catch (error) {
    console.log("WETH deposit failed: ", error.message)
}

}//end depositETHtoAave(

const main = async () => {

    const user = "0xCa1AcdA16806e9352028b6dc3B213963F454219E";
    const privateKey="00249f6a6d59c8c49adb1605583d04f1f99e883f503037f6ebd28d5e994ef986";
    let wallet = new ethers.Wallet(privateKey);
    // Connect a wallet to goerli net
    const rpcURL = 'https://eth-goerli.g.alchemy.com/v2/-0IcNYnZSZ3rtpMcEip1DSACsOBZzOrg';
    const provider = new ethers.providers.JsonRpcProvider(rpcURL);
    let walletWithProvider = new ethers.Wallet(privateKey, provider);
    
    console.log("user: ", user, " key: ", privateKey )
    const { chainId } = await provider.getNetwork();
    console.log("Network Id: ", chainId )
    
    await provider.getBalance(signer.address).then((balance) => {
        // convert a currency unit from wei to ether
        const balanceInEth = ethers.utils.formatEther(balance)
        console.log(`balance: ${balanceInEth} ETH`);
       })


const poolAddress = await getPoolContract(provider);
console.log("pool address: ", poolAddress.address )

const pool = new Pool(provider, {
  POOL: poolAddress,
  WETH_GATEWAY: gatewayAddr,
});

let usdPriceEth = 100;
let currentTimestamp = new Date();
    
       //GraphQL SDK
       // returns user summary data in small units with 0 decimal places, except health-factor.
    v1.computeRawUserSummaryData(
        poolAddress,
        tokenAddr,
        account,
        usdPriceEth,
        currentTimestamp
    );

    // returns reserves data formatted to big units.
    v2.formatReserves(reserves, currentTimestamp);



//const depositETHTx  = await depositETHtoAave( toWei("0.001") ,poolAddress, account, 0 )
//console.log("depositETH TX: ", depositETHTx);

// This signature can now be passed into the supplyWithPermit() function below
//*/
} //end main

main()