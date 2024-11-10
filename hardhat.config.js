require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = vars.get("PRIVATE_KEY");

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0xb760c9bb052fcc70e45d63b11a9393bc01e68f505c9db449c9f993a215ff9823`],
    },
  },
};

