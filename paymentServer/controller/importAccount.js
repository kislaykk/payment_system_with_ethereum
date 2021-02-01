const Web3 = require('web3');

const importAccount=(privateKey)=>new Promise((resolve,reject)=>{
    if (privateKey === undefined || privateKey === 'undefined' || privateKey === null) reject(new Error('There is no private Key'))
    try {
        const resources = require('../resources.json');
        const web3 = new Web3(resources.infuraEndpoint);
        const result = web3.eth.accounts.privateKeyToAccount(privateKey);
        const importedAccount = result.address;
        resolve({address : importedAccount});
    } catch (error) {
        reject(error);
    }
})

module.exports = importAccount;