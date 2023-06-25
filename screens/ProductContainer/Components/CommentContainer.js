import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import Avatar from "../../../shared/components/Avatar";
import { userNameGetInitials } from "../../../shared/utilis/Index";
import { COLORS } from "../../../shared/constants/Index";

export default function CommentContainer({ comment }) {
  return (
    <View style={styles.commentContainer}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Avatar name={comment.userName} />
          <View style={styles.userInfoGroup}>
            <Text style={styles.userInitalName}>
              {userNameGetInitials(comment.userName)}
            </Text>
            <View style={styles.startsContainer}>
              {Array.from({ length: comment.rate }).map((gold, index) => (
                <View key={index}>
                  <Image
                    style={styles.startIcon}
                    source={require("../../../assets/startIconSmall.png")}
                  />
                </View>
              ))}
              <Text style={styles.lightweight}>{comment.rate}.0</Text>
            </View>
            
          </View>
        </View>
        <Text style={styles.lightweight}>{comment.createdDate}</Text>
      </View>

      <Text style={styles.commentText}>{comment.comment}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  commentContainer: {
    marginBottom: 16,
    padding: 16,
  },
  commentText: {
    fontSize: 14,
    marginVertical: 10,
  },
  userInitalName: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 700,
  },
  lightweight: {
    fontSize: 14,
    marginHorizontal:4,
    color: COLORS.gray,
  },
  startsContainer: {
    flexDirection: "row",
    alignItems:'center',
  },
  startIcon:{ width: 14, height: 14, marginHorizontal: 3 },
  userInfoGroup: {
    marginHorizontal: 10,
  },
});
