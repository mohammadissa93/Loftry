import React from 'react'
import { View ,StyleSheet,Image,Text} from 'react-native'
import { COLORS } from '../../../shared/constants/Index';

export default function ProductVotes(props) {
  return (
    <View style={{ flexDirection: "row", marginTop: 3 }}>
        <Text style={{ fontSize: 18, fontWeight: 700 }}>
          {props.startRating}.0
        </Text>
        <Text style={styles.voteCounts}>({props.voteCount})</Text>
        <View style={styles.startsContainer}>
          {Array.from({ length: props.startRating }).map((gold, index) => (
            <View key={index}>
              <Image
                style={styles.startIcon}
                source={require("../../../assets/starIconGold.png")}
              />
            </View>
          ))}
          {Array.from({ length: 5 - props.startRating }).map((gold, index) => (
            <View key={index}>
              <Image
                style={styles.startIcon}
                source={require("../../../assets/starIconGray.png")}
              />
            </View>
          ))}
        </View>
      </View>
  )
}
const styles = StyleSheet.create({
    voteCounts: {
      fontSize: 14,
      color: COLORS.gray,
      marginLeft: 8,
      marginTop: 2,
    },
    startsContainer: {
      flexDirection: "row",
      marginHorizontal: 12,
      marginTop: 3,
    },
    startIcon:{ width: 18, height: 17, marginHorizontal: 3 },
    priceContainer:{
      flexDirection: "row",
      alignItems: "center",
      marginTop: 3,
    },
  });