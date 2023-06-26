import React from "react";
import { View, Text, Image, StyleSheet,Dimensions, PixelRatio} from "react-native";
import ProgressBar from "../../../shared/components/ProgressBar";

export default function ProductVoteDescription(props) {
  const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SCALE = SCREEN_WIDTH / 565;

function normalizeFont(size) {
  const newSize = size * SCALE;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
  return (
    <View style={styles.voteDescContainer}>
      {props.votes.map((vote) => (
        <View key={vote.Id} style={styles.container}>
          <Text style={{ fontSize: 18 }}>{vote.star}</Text>
          <Image
            style={styles.smallStartIcon}
            source={require("../../../assets/startIconSmall.png")}
          />
          <View style={styles.progressBarcontainer}>
            <ProgressBar progress={vote.total / 10} />
          </View>
          <View style={styles.votesTotal}>
            <Text style={{ fontSize: normalizeFont(18) }}>{vote.total}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  voteDescContainer:{
    // paddingVertical: 12,
    paddingHorizontal: 11,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    justifyContent: "space-between",
  },
  progressBarcontainer: {
    flex: 9,
    justifyContent: "center",
  },
  smallStartIcon: { width: 14, height: 14, marginHorizontal: 3 },
  votesTotal: { flex: 1, alignItems: "flex-end" },
});
