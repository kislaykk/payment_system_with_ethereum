import 'react-native-gesture-handler';
import React from 'react';
import {  Text, View ,Button ,StyleSheet} from 'react-native';
import CreateWallet from './component/createWallet/createWallet';
import ImportAccount from './component/importAccount/importAccount';
import Payment from './component/pay/pay';
import Receive from './component/receive/receive';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View  style={styles.container}>
      <CreateWallet/>
      
      <ImportAccount/>
      <Payment/>
      <Receive/>
    </View>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});