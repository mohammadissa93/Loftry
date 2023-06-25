import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './screens/Header/Header';
import ProductContainer from './screens/ProductContainer/ProductContainer';
import { COLORS } from './shared/constants/Index';
import { StatusBar } from 'expo-status-bar';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <StatusBar style='light'/>
    <View style={styles.container}>
      <Header />
      <ProductContainer />
    </View>
    </Provider>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
