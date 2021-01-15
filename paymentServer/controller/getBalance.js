const Web3 = require('web3');

const getBalance = (address) =>{
    const resources = require('../resources.json');
    const web3 = new Web3(resources.infuraEndpoint);
    return web3.eth.getBalance(address);
}

module.exports = getBalance;