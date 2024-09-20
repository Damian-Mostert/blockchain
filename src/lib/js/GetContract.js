import Database from '@contracts/Database.json'; // Path to the ABI

const contracts = {
  Database,
};

const getContract = async (name,web3) => {
  const _contract = contracts[name];
  // Get the current network ID
  const networkId = Number(process.env.NETWORK_ID);

  // Get the deployed contract address from ABI for the current network
  const deployedNetwork = _contract.networks[networkId];

  if (!deployedNetwork) {
    throw new Error(`Contract ${name} not deployed on the current network (ID: ${networkId}).`);
  }

  // Connect the contract to the wallet
  const contract = new web3.eth.Contract(_contract.abi, deployedNetwork.address);

  return contract;
};

export default getContract;