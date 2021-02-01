const express = require('express');
const importAccount = require('../controller/importAccount');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({'message':'This api helps you get your account with your private key'});
})
router.post('/account',(req,res)=>{
    if (!req.body) res.status(500).json({'message':'body of request field is empty'})
    else
    {
        const {privateKey} = req.body;
        importAccount(privateKey)
        .then((address)=>{
            res.status(200).json({'message':'account found','address':address.address});
        })
        .catch((err)=>{
            res.status(500).json({'message':err.message});
        })
    }
    
})
module.exports = router;