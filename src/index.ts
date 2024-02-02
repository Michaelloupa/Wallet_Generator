import dotenv from "dotenv"
import { MultichainWalletWrapper } from "wallet-generator-v1";
import { createWallet, getAddress, getPrivateKey } from "./helpers/helpers";

dotenv.config();

//MAIN FUNCTION

const main = async () => {

    //create a new wallet
    const newWallet = await createWallet();
    console.log("new wallet created", newWallet)

    //get the wallet address

    const walletAddress = await getAddress(newWallet?.mnemonic);
    console.log("the wallet address", walletAddress);;

    
    //get the private key

    const privateKey = await getPrivateKey(newWallet?.mnemonic);
    console.log("The private key for the address:", privateKey);


}


main();