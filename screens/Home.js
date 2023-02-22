import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Home() {
  const logo = require("../assets/ac_no_bg.png");

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text>This is the home page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 25,
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  logo: {
    width: "90%",
    height: "10%",
  },
});
