const express = require('express');
const createAccount = require('../controller/createAccount');
const router = express.Router();
const createWallet = require('../controller/createWallet');
const getBalance = require('../controller/getBalance');
router.get('/',(req,res)=>{
    res.status(200).json({'message':'create a wallet or add an account'});
});

router.get('/create',(req,res)=>{
 createWallet()
 .then((wallet)=>{
    res.status(200).json({
        'message':'wallet created',
        'values': wallet
    })
 })
 .catch(err=>{
     res.status(500).json({
         'message' : err.message
     })
 })
})

router.get('/account',(req,res)=>{
    createAccount()
    .then((account=>{
        res.status(200).json({
            'message':'account created',
            'values': account
        })
    }))
    .catch(err=>{
        res.status(500).json({
            'message' : err.message
        })
    })
})

router.get('/balance',(req,res)=>{
    if(!req.body) res.status(500).json({"message":"this request has no body"});
    else if(!req.body.address) res.status(500).json({"message":"the body has no address"});
    else
    {
        getBalance(req.body.address)
        .then(balance=>{
            res.status(200).json({"balance":balance})
        })
        .catch(err=>{
            res.status(500).json({"message":err.message});
        })
    }
    
})
module.exports = router;