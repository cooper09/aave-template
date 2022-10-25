
<h1 align="center">Aave V3 Template with Ethers/Polygon</h1>

Node application uses the Goerli Test Netwwork to connect to the app.aave.com TestNET
![Aave V3 Testnet](/images/app.aave.testnet.png)

## Requirements 
    Metamask with a Polygon Account. Although, Goerli is a testnet for the Ethereum blockchain, this is in actualty a Polygon application. The Contracts used should be available in both Goerli and Polygon

<br />

## Installation

First fill the first 
private variables are kept in an .env which is not included in the repository

The Mandatory Fields are as follows:

GOERLI_URL = 'https://eth-goerli.g.alchemy.com/v2/-0IcNYnZSZ3rtpMcEip1DSACsOBZzOrg';
POLYGON_URL =  'https://polygon-mainnet.g.alchemy.com/v2/-xVyH7D3cYUoEWpjV1xuaHXQcXL7va-X';

POLYGON_ACCT = ""
POLYGON_KEY = ""

POOL_ADDRESS_PROVIDER_ADDR = "0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D"
https://goerli.etherscan.io/address/0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D

//Pool
POOL_ADDR = "0x794a61358D6845594F94dc1DB02A252b5b4814aD";
POOL_ADDR_PROXY = "0xdf9e4abdbd94107932265319479643d3b05809dc"
./abis/Pool.json
WETH_GATEWAY_ADDR = '0xBCca2fc5F30A65cE2155d739364f3fc8F57E6999'

Then install packages by running the command

yarn install / npm install
```

Finally run this command to see the result.

```sh
node test-github
``
## Application

    1) Load the V3 PoolAddressesProvider contract.
    2) Retrieve the LendingPool address.
    3) Load the LendingPool.
    4) Deposit ETH to the LendingPool. 

## Contact

[cooperatkmba@gmail.com](mailto:cooperatkmba@gmail.com)