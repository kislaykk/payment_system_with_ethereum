import React from 'react';
import {View,Text,Button} from 'react-native';

const CreateWalletForm=()=>{
    return (
        <View style={
            {flex: 1, 
            flexDirection: 'column'
            }}>
           
             <Button
                title='create wallet'/>
            
            
                
                
             <Button 
                title= 'add an account'/>
              
                
                
           
        </View>
    )
}


export default CreateWalletForm;