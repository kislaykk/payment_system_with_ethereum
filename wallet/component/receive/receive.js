import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import QRCode from 'react-native-qrcode-svg';

const {gettingAllAccounts} =require('../../databaseOperation/gettingAllAccounts')
const getAccountList = async () =>{
    const accountArray = await gettingAllAccounts();
    return accountArray;
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      
    }
  });
const Receive=()=>{
    const [receiveTo,setReceiveTo]=useState('unselected');
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
        <View style={styles.container}>
            <Text>
                select account to receive to
            </Text>
            <Picker
            selectedValue={receiveTo}
            style={{height:50,width:250}}
            onValueChange={(itemValue,itemIndex)=>{setReceiveTo(itemValue)}}
            >
              {PickerItem}          
            </Picker>
            <QRCode
                value={receiveTo}
                size={250}
            />  
            <Text>{receiveTo}</Text>
        </View>
        
    )
}

export default Receive;