import getContract from "./GetContract";
import {account,web3} from "./Provider";

const getValue = async (key)=>{
    const contract = await getContract("Database",web3);
    const value = await contract.methods.exists(key).call({blockNumber: 'latest',from:account.address});
    return value;
};
export default getValue;