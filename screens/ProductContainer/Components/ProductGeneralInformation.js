import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS } from "../../../shared/constants/Index";
import ProductVotes from "./ProductVotes";
import ProductPrice from "./ProductPrice";

export default function ProductGeneralInformation(props) {
  return (
    <View style={{ flex: 2 }}>
      <Text style={styles.fullName}>{props.data.fullName}</Text>
      <Text style={styles.size}>{props.data.size}</Text>
      <ProductVotes
        startRating={props.data.startRating}
        voteCount={props.data.voteCount}
      />
      <ProductPrice
        currency={props.data.currency}
        price={props.data.price}
        discount={props.data.discount}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  fullName: {
    color: COLORS.black,
    fontWeight: 700,
  },
  size: {
    color: COLORS.gray,
    fontWeight: 600,
    marginTop: 3,
  },
});
