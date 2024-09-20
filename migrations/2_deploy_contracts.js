const DATABASE = artifacts.require("Database");
module.exports = function (deployer) {
  deployer.deploy(DATABASE);
};
