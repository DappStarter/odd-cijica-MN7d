require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area short note cruise mirror champion coral light army general'; 
let testAccounts = [
"0x08714a8745127c97d4360ca93d196119d3850a5b47e0ce49b4f2ccbae584b075",
"0x058799df28ef9b01645476a40a0b6f6dec88404e700952f4c36a6bf4e4857877",
"0x0b6da325aad04095bc863ccce914d01f8d38b327b42b38d54531dc92a483a985",
"0xa9111ea13abc4771b282bf1ab9b18d8e042c9d3ee83ddb17a5a81466e621cf0e",
"0x83ff3e3d95853470b271433396aff3fe73b45b091faa8d4731adc0e5ec70f02d",
"0xfd385884d99c53ccd072898a0b2c5931f6eda423c57c1603ccb7061c7568acaa",
"0x4cb5b00c381a21b125471e7d23effe43ace3dc3083f255d216bfd6602630405e",
"0x7e52eb1f3655cebbc78d21af49367793ba20627a9daaaaa170098302e0f4d641",
"0xcd59f3cfe9c73acb9d05b8899c18dd3ed553294fe2e03cf74856e32f4df79d20",
"0xef4b6a4cc7504822616afac11c8a8d00eb978b4ef4d43c9e5eaf7c1e2eb5c8f2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


