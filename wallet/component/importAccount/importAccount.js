import React from 'react';
import {View,Text,TextInput,Button} from 'react-native';
const ImportAccount=()=>{
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
        />
        <Button title='import'/>       
        </View>
        
    )
}

export default ImportAccount;