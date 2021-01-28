import 'react-native-gesture-handler';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {  Text, View ,Button ,StyleSheet} from 'react-native';
import CreateWallet from './component/createWallet/createWallet';
import ImportAccount from './component/importAccount/importAccount';
import Payment from './component/pay/pay';
import Receive from './component/receive/receive';
let {dbCreation} = require('./databaseOperation/dbCreation.js');
dbCreation();

const App=(props)=> {
  return (
    
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Button
      title="create wallet"
      onPress={()=>(props.navigation.navigate('createWallet'))}
      />
      </View>
      
      <View style={styles.buttonContainer}>
      <Button
      title="import account"
      onPress={()=>(props.navigation.navigate('importAccount'))}
      />
      </View>

      <View style={styles.buttonContainer}>
      <Button 
      title="pay someone"
      onPress={()=>(props.navigation.navigate('payment'))}
      />
      </View>
      
      <View style={styles.buttonContainer}>
      <Button
      title="receive from someone"
      onPress={()=>(props.navigation.navigate('receive'))}
      />
      </View>
      
    </View>
     
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  buttonContainer: {
    padding: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'skyblue'
  }
});

const appNavigator = createStackNavigator({
  Home:{
    screen:App,
  },
  createWallet:{
    screen:CreateWallet
  },
  importAccount:{
    screen:ImportAccount
  },
  payment:{
    screen:Payment
  },
  receive:{
    screen:Receive
  }
})

export default createAppContainer(appNavigator);