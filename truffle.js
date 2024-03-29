module.exports = {
     // See <http://truffleframework.com/docs/advanced/configuration>
     // to customize your Truffle configuration!
     networks: {
          ganache: {
               host: "localhost",
               port: 7545,
               network_id: "*" // Match any network id
          },
          chainskills: {
            host: "localhost",
            port: 8545,
            network_id: "4224",
            gas: 4700000
          },
          rinkeby: {
               host: "localhost",
               port: 7545,
               network_id: "4",
               gas: 4700000
          },
          live: {
               host: "localhost",
               port: 8545,
               network_id: "1",
               gas: 4700000,
               gasPrice: 57000000000,
               from : "0x076dfc548f64b00f23c330d2a2b1ea471e704b64"
          }
     }
};