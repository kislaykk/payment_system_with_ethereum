import React,{useState} from 'react';
import {View,Text,Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const Receive=()=>{
    const [receiveTo,setReceiveTo]=useState('');
    return(
        <View>
            <Text>
                select account to receive to
            </Text>
            <Picker
            selectedValue={receiveTo}
            style={{height:50,width:250}}
            onValueChange={(itemValue,itemIndex)=>setReceiveTo(itemValue)}
            >
            <Picker.Item label='account1' value='account1'/>
            <Picker.Item label='account2' value='account2'/>
            <Picker.Item label='account3' value='account3'/>                
            </Picker>
            <Text>
                receive
                This will display QR code
                and also share via apps,emails.
            </Text>
        </View>
        
    )
}

export default Receive;