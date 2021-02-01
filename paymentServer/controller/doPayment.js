const Web3 = require('web3');

const doPayment = (privateKey,to,from,value)=>{
    const resources = require('../resources.json');
    const web3 = new Web3(resources.infuraEndpoint);
    web3.eth.accounts.wallet.add(privateKey);
    return web3.eth.sendTransaction({
        from ,
        to ,
        value ,
        gas : "2000000"
    })
}

module.exports = doPayment;