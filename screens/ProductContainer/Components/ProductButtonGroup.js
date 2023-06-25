import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS } from "../../../shared/constants/Index";

export default function ProductButtonGroup(props) {
  return (
    <View style={styles.assistantButtonGroupContainer}>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={() => props.modalVisibleMethod(true)}>
          <Text style={styles.sortByText}>
            Sort by {props.sortByObject.value} {props.modalVisible ? "▲" : "▼"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navigationButton}>Go to Product</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={props.modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => props.modalVisibleMethod(false)}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.handleSortByChangeMethod({
                key: "userName",
                value: "Name",
              })
            }
          >
            <Text style={styles.sortOptionText}>User Name</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.handleSortByChangeMethod({ key: "rate", value: "Rate" })
            }
          >
            <Text style={styles.sortOptionText}>Rate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.handleSortByChangeMethod({
                key: "createdDate",
                value: "Date",
              })
            }
          >
            <Text style={styles.sortOptionText}>Date</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  assistantButtonGroupContainer: {
    padding: 16,
  },
  sortByText: {
    fontSize: 16,
    color: COLORS.gray,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.modelBackgroundColor,
    padding: 16,
    width: "100%",
    height: "25%",
    position: "absolute",
    bottom: 1,
    opacity: 0.95,
  },
  closeText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 16,
  },
  sortOptionText: {
    fontSize: 18,
    marginBottom: 16,
  },
  commentContainer: {
    marginBottom: 16,
  },
  commentText: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navigationButton: {
    backgroundColor: COLORS.buttonColor,
    color: COLORS.white,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    fontWeight: "700",
    fontSize: 16,
  },
});
