import React from 'react'
import { View ,StyleSheet,Text} from 'react-native'
import { COLORS } from '../../../shared/constants/Index';

export default function ProductPrice(props) {
  return (
    <View style={styles.priceContainer}>
        <Text style={{ fontSize: 16, fontWeight: 700 }}>
          {props.currency}
          {(
            props.price -
            (props.discount * props.price) / 100
          ).toFixed(2)}
        </Text>
        <Text style={styles.oldPrice}>
          {props.currency}
          {props.price}
        </Text>
        <Text style={styles.discount}>{props.discount}%</Text>
      </View>
  )
}
const styles = StyleSheet.create({
    priceContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 3,
    },
    oldPrice: {
      fontSize: 16,
      fontWeight: 700,
      color: COLORS.gray,
      marginLeft: 6,
      textDecorationLine: "line-through",
    },
    discount: {
      fontSize: 13,
      fontWeight: 700,
      color: COLORS.discountColor,
      marginLeft: 6,
    },
  });
