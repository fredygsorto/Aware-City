import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const FilterButton = ({ children }) => {
  return (
    <View style={styles.filterButtonContainer}>
      <Pressable>{children}</Pressable>
    </View>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  filterButtonContainer: {
    backgroundColor: "black",
  },
});
