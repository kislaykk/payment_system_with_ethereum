import React, { useState } from 'react';
import {View,Text,Button,TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const {gettingAllAccounts} =require('../../databaseOperation/gettingAllAccounts')
const getAccountList = async () =>{
    const accountArray = await gettingAllAccounts();
    return accountArray;
}

const Payment= ()=>{
    const [payFrom,setPayFrom]=useState('unselected');
    const [PickerItem,setPickerItem]= useState([<Picker.Item key="1" value="unselected" label="unselected"/>])
    const accountList = getAccountList();
    accountList.then(values=>{
        let accounts = [<Picker.Item key="1" value="unselected" label="unselected"/>] ;
        values.forEach(val=>{
            accounts.push(<Picker.Item key={val.privateKey} value={val.address} label={val.address}/>)
        })
        setPickerItem(accounts);
    });
    
    
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
              {PickerItem}
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
            <Button title='pay' onPress={()=>{console.log(payFrom)}}/>
        </View>
        
    )
}

export default Payment;