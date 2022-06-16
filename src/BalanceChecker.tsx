import { abi as ERC20_ABI } from './ERC20.json';
import { config } from './constants';
import { ethers, BigNumber, providers } from 'ethers'
import detectEthereumProvider from '@metamask/detect-provider'
import { MetaMaskInpageProvider } from '@metamask/providers';


function BalanceChecker() {
  
    async function checkBalance() {
        
        const ethereum = window.ethereum as MetaMaskInpageProvider

        // Get exchangeProxy contract address from @0x/contract-addresses library
        const CHAIN_ID = 3; // 3: Ropsten; 1: Mainnet; 137: Polygon
        const contractAddress = config[CHAIN_ID].divaAddress;

        const provider = await detectEthereumProvider()

        if (provider) {
            console.log('Ethereum successfully detected!')
            const chainId = await provider.request({
                method: 'eth_chainId'
              })            
        } else {

            // if the provider is not detected, detectEthereumProvider resolves to null
            console.error('Please install MetaMask!', error)
        }
          
        // console.log('provider.getSigner(): ', provider.getSigner())

        // Connect to contract 
        // const exchange = new IZeroExContract(exchangeProxyAddress, window.ethereum);
               
        // Create contract instance using window.ethereum (injected by MetaMask wallet) as the provider
        const contractInstance = contractAddress != null 
            ? new ethers.Contract(
                contractAddress,
                ERC20_ABI,
                provider.getSigner()
                )
            : null
        
        // Get connected account
        // const accounts = await ethers.getSigners();
        // const takerAccount = accounts[0]; 
        // console.log("Current account connected: " + takerAccount)

        // // **************** Check allowance (method 1 using web3) *************
        // // Contract addresses of taker token
        // const takerTokenAddress = params.baseToken;

        // // Initialize taker token contract
        // const takerTokenContract = await new web3.eth.Contract(ERC20_ABI, takerTokenAddress)
        
        // // Check allowance
        // const approvedByTaker = await takerTokenContract.methods.allowance(takerAccount, exchangeProxyAddress).call();
        // // *************************************************************************************

        // // **************** Check allowance (method 2 using 0x libraries) *************
        // // Contract addresses of taker token
        // // const takerTokenAddress = params.baseToken;

        // // // Initialize taker contract
        // // const takerTokenContract = new ERC20TokenContract(takerTokenAddress, web3.eth.currentProvider);

        // // // Check allowance
        // // const approvedByTaker = await takerTokenContract.allowance(takerAccount, exchangeProxyAddress).callAsync();
        // // *************************************************************************************

        // // Print allowances
        // console.log("Approved by taker: " + await approvedByTaker.toString())

        // // TODO: Handle sum(takerAssetAmountFillAmounts) > allowance
        
        // console.log(metaData)

        // // Enter amounts to fill for each of the orders as an array of strings 
        // const takerAssetFillAmounts = [
        //     metaData[0].remainingFillableTakerAmount,
        //     // metaData[1].remainingFillableTakerAmount,
        //     // metaData[2].remainingFillableTakerAmount,
        //     // '1'
        // ]

        // console.log('takerAssetFillAmounts')
        // console.log(takerAssetFillAmounts)

        // const len = takerAssetFillAmounts.length

        // // TODO Handle sum(takerAssetAmountFillAmounts) > remainingFillable amount

        // // Batch fill limit order
        // await exchange
        //     .batchFillLimitOrders(orders.slice(0,len), signatures.slice(0,len), takerAssetFillAmounts, true)
        //     .awaitTransactionSuccessAsync({ from: takerAccount})
        //     .catch((err) => console.error(err));
    };

    return (
        <div>
            <button onClick={checkBalance}>Check balance</button>
        </div>
    );
}

export default BalanceChecker;