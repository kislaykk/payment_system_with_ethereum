const express = require('express');
const doPayment = require('../controller/doPayment');
const router = express.Router();
router.get('/',(req,res)=>{
    res.status(200).json({"message":"this api is for transaction"});
})
router.post('/send',(req,res)=>{
    if(!req.body) res.status(500).json({'message':'request body is empty'});
    else if(!req.body.privateKey || !req.body.to || !req.body.from || !req.body.value)  res.status(500).json({'message':'invalid parameters'});
    else
    {
        doPayment(req.body.privateKey,req.body.to,req.body.from,req.body.value)
        .then(transaction=>{
            res.status(200).json({"message":"trnsaction success","transaction":transaction})
        })
        .catch(err=>{
            res.status(500).json({"message":err.message});
        })
    }
});

module.exports=router;