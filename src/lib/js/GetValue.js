import getContract from "./GetContract";
import {account,web3} from "./Provider";

const getValue = async (key) => {
    try {
        const contract = await getContract("Database",web3);
        const value = await contract.methods.get(key).call({ from: account.address,blockNumber: 'latest' });
        return value;
    } catch (error) {
        console.error("Error fetching value:", error);
        return null;
    }
};

export default getValue;
