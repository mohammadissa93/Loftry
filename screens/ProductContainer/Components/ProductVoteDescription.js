import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ProgressBar from "../../../shared/components/ProgressBar";

export default function ProductVoteDescription(props) {
  return (
    <View style={{ padding: 11 }}>
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
            <Text style={{ fontSize: 18 }}>{vote.total}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
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
