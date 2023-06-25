import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import { COLORS } from '../../../shared/constants/Index';
import {useSelector,useDispatch} from 'react-redux';
import {increesCart} from '../../../redux/actions'

export default function ProductFooter(props) {
  const {totalItems} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  return (
    <View style={styles.footerGroup}>
        <View>
          <Text style={styles.newPrice}>
            {props.currency}
            {(props.price - (props.discount * props.price) / 100).toFixed(2)}
          </Text>
          <Text style={styles.oldPrice}>
            {props.currency}
            {props.price}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => dispatch(increesCart(totalItems + 1))}>
            <Text style={styles.navigationInlineButton}>Add To Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navigationOutlineButton}>Order By WhatsApp</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}
const styles = StyleSheet.create({
    newPrice: {
      fontSize: 20,
      fontWeight: 700,
      color: COLORS.black,
    },
    oldPrice: {
      fontSize: 16,
      fontWeight: 700,
      color: COLORS.gray,
      textDecorationLine: "line-through",
    },
    navigationInlineButton: {
      backgroundColor: COLORS.buttonColor,
      color: COLORS.white,
      paddingVertical: 12,
      paddingHorizontal: 16,
      textAlign:'center',
      borderRadius: 8,
      fontWeight: "700",
      fontSize: 16,
    },
    navigationOutlineButton: {
      backgroundColor: COLORS.white,
      color: COLORS.buttonColor,
      paddingVertical: 8,
      paddingHorizontal: 18,
      borderRadius: 8,
      fontWeight: "700",
      fontSize: 16,
    },
    footerGroup: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding:16
    },
    
  });