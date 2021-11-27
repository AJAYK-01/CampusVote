const path = require("path");
require('dotenv').config()

const privateKey = process.env.REACT_APP_Private_Key
const serverUrl = process.env.REACT_APP_SpeedyURL
const PrivateKeyProvider = require("@truffle/hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname,
    "/contracts"),
  networks: {
    mumbai: {
      provider: () => new PrivateKeyProvider([privateKey
      ], serverUrl),
      network_id: 80001,
      skipDryRun: true,
      gas: 6721975,
      gasPrice: 20000000000
    }
  },
  compilers: {
    solc: {
      version: "0.4.17",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};