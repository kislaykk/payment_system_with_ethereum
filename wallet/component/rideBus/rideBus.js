import React, { useState , useEffect } from 'react';
import {View,Text,Button,TextInput,StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const {gettingAllAccounts} =require('../../databaseOperation/gettingAllAccounts')
import { BarCodeScanner } from 'expo-barcode-scanner';
const axios=require('axios');
const {paymentServer} = require('../../assets/walletInfo.json');
import fetchBusInfo from '../firebaseOp';
const getAccountList = async () =>{
    const accountArray = await gettingAllAccounts();
    return accountArray;
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      height:10
      
    },
  });

const getBalanceFromSever = async (address)=>{
    try {
        console.log(address)
        const response = await axios({
            method:'post',
            url: `${paymentServer}/wallet/balance`,
            data:{
                address
            },
        })
        if(response.status==200)
        alert(`balance:${response.data.balance}`)
        else
        alert('internal server error')
    } catch (error) {
        alert(error.message)
        // console.log(error.response.data)
        // console.log(error.request)
    }
    
}
const makePayment = async (payfrom,payto,amount) =>{
    try
    {
        if (!payto || !amount) throw new Error('fields are empty');
        const [address,privateKey] = payfrom.split('+');
        payto=payto.trim();
        if(payto==='') throw new Error('payTo undefined');
        amount=amount.trim();
        if(amount==='') throw new Error('amount undefined')
        else if (isNaN(amount)) throw new Error(' amount is not a number');
        const response = await axios({
            method:'post',
            url:`${paymentServer}/transaction/send`,
            data:{
                privateKey:privateKey,
                to:payto,
                from:address,
                value:amount
            }
        })
        if(response.data.message==='trnsaction success') alert(`successful transaction:${response.data.transaction.transactionHash}`);
        else alert(response);

    }
    catch(error)
    {
        alert(error.message);
    }
    

}
const RideBus= ()=>{
    const [payFrom,setPayFrom]=useState('unselected');// payFrom contains both the address and privateKey.
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [bus,setBus]=useState('');
    const [stoppage,setStoppage]=useState('');
    const [payTo,setPayTo]=useState('');
    const [amount,setAmount]=useState('');
    const [busInfo,setBusInfo]=useState({});
    const [PickerItem,setPickerItem]= useState([<Picker.Item key="1" value="unselected" label="unselected"/>])
    const [DestinationItem,setDestinationItem] = useState([]);
    const accountList = getAccountList(); 

    const Qrbutton=()=>{
        if (scanned)
        return <Button title={'Tap to Scan Again'} onPress={() => {
            setScanned(false);
            setAmount('');
            setBus('')
            setBusInfo({});
            setPayTo('');
            setStoppage('');
            setDestinationItem([<Picker.Item key="1" value="unselected" label="unselected"/>]);
        }} />
        else return null;
    }
    accountList.then(values=>{
        let accounts = [<Picker.Item key="1" value="unselected" label="unselected"/>] ;
        values.forEach(val=>{
            accounts.push(<Picker.Item key={val.privateKey} value={`${val.address}+${val.privateKey}`} label={val.address}/>)
        })
        setPickerItem(accounts);
    });
    

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
    const handleBarCodeScanned = async ({ type, data }) => {
        setBus(data);
        setScanned(true);
        const busD = await fetchBusInfo(data);
        setBusInfo(busD);
        setPayTo(busD.address);
        let destinations = [] ;
        busD.stoppages.forEach((val,index)=>{
            destinations.push(<Picker.Item key={index} value={`${val.stoppage}-${val.fare}`} label={`${val.stoppage}-${val.fare}`}/>)
        })
        setDestinationItem(destinations);
        setStoppage(`${busD.stoppages[0].stoppage}-${busD.stoppages[0].fare}`)
        setBusInfo(busD);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };
    
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
            <Button title='check balance' onPress={()=>{
                if(payFrom!=="unselected")
                {
                    const [add,pvt]=payFrom.split('+')
                    getBalanceFromSever(add.trim());
                }
            }}/>

            {busInfo.address?
            <>
            <Text>Bus Found</Text>
            
            <Text>
                select stoppage
            </Text>
            <Picker
            selectedValue={stoppage}
            style={{height:50,width:250}}
            onValueChange={(itemValue,itemIndex)=>{
                setAmount(itemValue.split('-')[1])
                setStoppage(itemValue);
                
            }}
            >
              {DestinationItem}
            </Picker>
            </>
            :null}


            <Button title='pay' onPress={()=>makePayment(payFrom,payTo,amount)}/>
            <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.container}/>
            {Qrbutton()}
        </View>
        
    )
}

export default RideBus;