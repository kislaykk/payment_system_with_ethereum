import React, { useState } from 'react';
import {View,Text,Button,TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const {gettingAllAccounts} =require('../../databaseOperation/gettingAllAccounts')
const getAccountList = async () =>{
    let accountArray = await gettingAllAccounts();
    // console.log(accountArray)
    // let accounts = accountArray.map((acc,i)=> <Picker.Item key={acc.privateKey} label={acc.address} value={acc.address}/>);
    // let accounts = accountArray.map((acc)=>acc.address)
    let accounts=[]
    accountArray.forEach(acc=>{
        accounts.push(acc.address)
    })
    // console.log(accounts)
    return accounts;
}
const Payment=()=>{
    const [payFrom,setPayFrom]=useState('unselected');
    let accountList = getAccountList();
    
    console.log(accountList)
    
    return(
        <View style={{
            flex:1,
            flexDirection:'column'
        }}>
            <Text>
                select account to pay from
            </Text>
            <Picker
            selectedValue={payFrom}
            style={{height:50,width:250}}
            onValueChange={(itemValue,itemIndex)=>setPayFrom(itemValue)}
            >
              {/* {accountListToRender}           */}
            </Picker>
            <Text>
                Enter account you want to pay
            </Text>
            <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
            <Text>
                Enter the amount in wei
            </Text>
            <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
            <Button title='pay'/>
        </View>
        
    )
}

export default Payment;