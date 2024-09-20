module.exports = {
  contracts_build_directory:"./src/lib/contracts",
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Ganache GUI port
      network_id: "*",       // Any network (default: none)
      from:"0xe7F6218a0F3fF816d6edA720CaE944f5602E00F1"
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
