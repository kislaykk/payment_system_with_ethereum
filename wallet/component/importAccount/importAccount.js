import React from 'react';
import {View,Text,TextInput,Button,Alert} from 'react-native';
const {paymentServer} = require('../../assets/walletInfo.json')
const axios = require('axios');
const {additionOfAccounts} = require('../../databaseOperation/additionOfAccounts.js');
const impAccout = async(privateKey)=>{
    let response = await axios({
        method:'post',
        url:`${paymentServer}/import/account`,
        data: {
            privateKey
        }
    })
    additionOfAccounts(response.data.address,privateKey);
    Alert.alert("account imported",`address:${response.data.address}`)
}
const ImportAccount=()=>{
    const [value, onChangeText] = React.useState();
    // keep  in mind that this will be active oly if wallet is PerformanceObserverEntryList, otherwise disable it  
    return(
        <View style={{
            flex:1,
            flexDirection:'column'
        }}>
        <Text>
            Input your account private key to import your ethereum account
        </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
        <Button title='import' onPress={()=>impAccout(value)}/>       
        </View>
        
    )
}

export default ImportAccount;