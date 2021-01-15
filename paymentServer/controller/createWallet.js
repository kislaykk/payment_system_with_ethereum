const Web3 =  require('web3');


const createWallet=()=> new Promise((resolve,reject) =>{
    try
    {
        const resources = require('../resources.json');
        const web3 = new Web3(resources.infuraEndpoint);
        let wallet = web3.eth.accounts.wallet.create(1);
        const {address ,privateKey} = wallet['0'];
        resolve({address ,privateKey}) ;
    }
    catch(err)
    {
        reject(err);
    }
    
})

module.exports=createWallet