const Web3 = require('web3');

const createAccount=()=> new Promise((resolve,reject)=>{
    try {
        const resources = require('../resources.json');
        const web3 = new Web3(resources.infuraEndpoint);
        const {address, privateKey} = web3.eth.accounts.create();
        resolve( {address, privateKey});
    } catch (error) {
        reject(error);   
    }
})

module.exports = createAccount;