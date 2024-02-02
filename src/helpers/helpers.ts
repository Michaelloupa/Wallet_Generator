import dotenv from "dotenv"
import { MultichainWalletWrapper } from "wallet-generator-v1";

dotenv.config();

//Generate Mnemonic
export const generateMnemonic = async () => {
    try {
      const mnemonic =  await MultichainWalletWrapper.generateMnemonic(); 
      return mnemonic;
    } catch (error) {
        console.log("Could not generate mnemonic",error)
    }
    

}

//Create EVM wallet
export const createWallet = async() =>{

    try {
        const {address, mnemonic} = await MultichainWalletWrapper.createWalletEVMAndDisplayMnemonic()
        return {address,mnemonic};
    } catch (error) {
        
    }
}

//Get address

export const getAddress = async(mnemonic:string) =>{
    try {
                
        if (!mnemonic) {
            throw new Error("Seed phrase not available");            
        }
        const address = await MultichainWalletWrapper.getEvmWalletAddress(mnemonic)
        
        return address;
    } catch (error) {
        console.log("Unable to get wallet address",error)
    }
}

//get private key

export const getPrivateKey = async(mnemonic:string)=>{
    try {
                
        if (!mnemonic) {
            throw new Error("Seed phrase not available");            
        }

        const privateKey = await MultichainWalletWrapper.getPrivateKeyEVM(mnemonic);
        return privateKey;
    } catch (error) {
        
    }
}