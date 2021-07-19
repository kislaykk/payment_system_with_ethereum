const express = require('express') ;
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;

const wallet = require('./routes/wallet');
const importAc = require('./routes/importAc');
const transaction = require('./routes/transaction');
app.use(cors());
app.get('/',(req,res)=>{
    res.status(200).json({'message':'welcome to the payment server'});
})

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use('/wallet',wallet);
app.use('/import',importAc);
app.use('/transaction',transaction)
app.listen(port,()=>{
    console.log(`App is listening to port->${port}`);
})