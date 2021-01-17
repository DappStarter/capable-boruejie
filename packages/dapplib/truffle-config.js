require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note meadow unusual install clip olympic sleep'; 
let testAccounts = [
"0x0a61505f9c8bda95883d35258b9efc84c54a08e0d068c09ccff12a22ef7358dd",
"0x421f77e039b550952629a53a595a5f9a78b781b321894e8afb9d246155ab7df9",
"0xfd8380ed0d701ee5c1ba7d9a0c0e7eda6bdb04f060ac2a86cf72d8796a5cfc54",
"0x38b68940f2a9b51cfc7385b85d3e9c24c7c3a223e1b7c57f272136248db6ae79",
"0xe57d3080049e59046ebdeac1588581eeafc44a700019d0c3827d69f3000a9aad",
"0x802ed5027d09ea8bee5eee142ad46911d1320bbaf41514e72ae7a2e1f70fa4a8",
"0x2d16d0324debb41ed975d42cdbd14a22dc8e2ddbf6b5e0dc8b4e72a71922b78f",
"0xdc8db5d32ada8f54624fc08ef5d2fa9477f8300a50293815998244d694d641fe",
"0xf504b3c456f2e510aa5b7936ebb5db77c1cc3b82b829ddf4ddce52594a7a69c8",
"0x736315f5aa6767d0eb5d885c24508ebf97a35fdcf4d3ef05e59c56a2361ab1f6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
