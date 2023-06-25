import React from 'react';
import { StyleSheet,Image,Text, View } from 'react-native';
import { COLORS } from '../../shared/constants/Index';
import { useSelector } from 'react-redux';

export default function Header() {
  const {totalItems} = useSelector(state => state.userReducer);
  return (
      <View style = {styles.headers}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} 
          source= {require('../../assets/AppLogo.png')}/>
        </View>
        <View style={styles.langCartContainer}>
          <Image style={styles.language} 
          source= {require('../../assets/Language.png')}/>
          <Image style={styles.productCart} 
          source= {require('../../assets/add_to_cart.png')}/>
          <Text style={{color:COLORS.white,marginTop:-3,fontSize:12}}>{totalItems}</Text>
        </View>
      </View>
  );
} 

const styles = StyleSheet.create({
  headers:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: COLORS.black,
    height: 150,
    justifyContent: 'space-between',
    paddingHorizontal: 16,    
    
  },
  logoContainer:{
    flexDirection: 'row',
    paddingBottom: 24,
  },
  langCartContainer:{
    flexDirection: 'row',
    paddingBottom: 16,
    justifyContent: 'space-evenly',
  },
  logo:{
    height: 33,
    width: 119,
  },
  language:{
    height: 21,
    width: 40,
    marginHorizontal: 11
  },
  productCart:{
    height: 24,
    width: 24,
  }
});
