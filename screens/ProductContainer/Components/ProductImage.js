import React from "react";
import { View,Image } from "react-native";

export default function ProductImage(props) {
  return (
    <View style={{ flex: 1 }}>
      <Image style={{ width: 100, height: 100 }} source={props.productImage} />
    </View>
  );
}

