var ElectionContract = artifacts.require("./ElectionContract.sol");

module.exports = function (deployer) {
  deployer.deploy(ElectionContract);
};
