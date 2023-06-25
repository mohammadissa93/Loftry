import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import useGetProduct from "../../hooks/useGetProduct";
import Spinner from "../../shared/components/Spinner ";
import { COLORS } from "../../shared/constants/Index";
import ProductImage from "./Components/ProductImage";
import ProductGeneralInformation from "./Components/ProductGeneralInformation";
import ProductVoteDescription from "./Components/ProductVoteDescription";
import Avatar from "../../shared/components/Avatar";
import ProductButtonGroup from "./Components/ProductButtonGroup";
import CommentContainer from "./Components/CommentContainer";
import ProductFooter from "./Components/ProductFooter";

const Comment = ({ comment }) => (
  <View style={styles.commentContainer}>
    <Avatar name={comment.userName} />
    <Text style={styles.commentText}>{comment.userName}</Text>
    <Text style={styles.commentText}>{comment.rate}</Text>
    <Text style={styles.commentText}>{comment.comment}</Text>
    <Text style={styles.commentText}>{comment.createdDate}</Text>
  </View>
);

export default function ProductContainer() {
  const { data, isLoading, error } = useGetProduct();

  const [sortBy, setSortBy] = useState({ key: "userName", value: "Name" });
  const [modalVisible, setModalVisible] = useState(false);
  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <Spinner size="large" color={COLORS.black} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }
  const sortedComments = data.comments.sort((a, b) => {
    if (a[sortBy.key] < b[sortBy.key]) {
      return -1;
    }
    if (a[sortBy.key] > b[sortBy.key]) {
      return 1;
    }
    return 0;
  });
  const handleSortByChange = (value) => {
    setSortBy(value);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.shortName}>{data.shortName}</Text>
      <View style={styles.description}>
        <View style={styles.descriptionGeneralInfo}>
          <ProductImage productImage={data.productImage} />
          <ProductGeneralInformation data={data} />
        </View>
        <ProductVoteDescription votes={data.votes} />
      </View>
      <ProductButtonGroup
        modalVisibleMethod={setModalVisible}
        sortByObject={sortBy}
        handleSortByChangeMethod={handleSortByChange}
        modalVisible={modalVisible}
      />
      <View style={{flex:1}}>
        <FlatList
          data={sortedComments}
          renderItem={({ item }) => (
            <CommentContainer key={item.Id} comment={item} />
          )}
        />
      </View>
      <ProductFooter
        currency={data.currency}
        price={data.price}
        discount={data.discount}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    marginBottom: 8,
  },
  shortName: {
    marginBottom: 10,
    marginTop: 16,
    paddingHorizontal: 28,
    fontSize: 16,
    color: COLORS.gray,
    fontWeight: 600,
  },
  description: {
    height: 300,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 16,
  },
  descriptionGeneralInfo: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
});
