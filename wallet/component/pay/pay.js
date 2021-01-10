import React, { useState } from 'react';
import {View,Text,Button,TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Payment=()=>{
    const [payFrom,setPayFrom]=useState('');
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
            <Picker.Item label='account1' value='account1'/>
            <Picker.Item label='account2' value='account2'/>
            <Picker.Item label='account3' value='account3'/>                
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