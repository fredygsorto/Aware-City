import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { markers } from "../MapData";

export default function Home() {
  // const logo = require("../assets/ac_no_bg.png");

  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source={logo} /> */}
      <Text>This is the home page</Text>
      {/* <FlatList
        data={markers}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: "#FCE9D8",
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
});
