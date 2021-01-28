import React from 'react';
import {View,Text,Button,Alert} from 'react-native';
const {paymentServer}= require('../../assets/walletInfo.json');
const axios = require('axios');
const {additionOfAccounts} = require('../../databaseOperation/additionOfAccounts');
const {gettingAllAccounts} = require('../../databaseOperation/gettingAllAccounts');
const createWallet=async()=>{
    //add database handle operation to store the request
    // wallet wont be created if there is a wallet(collection of accounts) already
    let response = await axios({
        method: 'get',
        url: `${paymentServer}/wallet/create`
    });
    additionOfAccounts(response.data.values.address,response.data.values.privateKey);
    Alert.alert("wallet created",`account:${response.data.values.address}\nprivateKey:${response.data.values.privateKey}`)
}

const addAccount = async ()=>{
    //add database handle operation to store the request
    let response = await axios({
        method: 'get',
        url: `${paymentServer}/wallet/account`
    });
    additionOfAccounts(response.data.values.address,response.data.values.privateKey);
    Alert.alert("account added",`account:${response.data.values.address}\nprivateKey:${response.data.values.privateKey}`)
}
const CreateWalletForm=()=>{
    return (
        <View style={
            {flex: 1, 
            flexDirection: 'column'
            }}>
           
             <Button
                onPress = {createWallet}
                title='create wallet'/>
            
            
                
                
             <Button 
                onPress = {addAccount}
                title= 'add an account'/>
              
                
                
           
        </View>
    )
}


export default CreateWalletForm;