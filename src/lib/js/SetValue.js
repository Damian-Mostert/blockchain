
import getContract from './GetContract';
import {account,web3} from "./Provider";

const setValue = async (key, value) => {
    try {
        const contract = await getContract("Database",web3);
        await contract.methods.set(key, value).send({ from: account.address });
        console.log(`Successfully set value for key: ${key}`);
    } catch (error) {
        console.error("Error setting value:", error);
    }
};

export default setValue;
