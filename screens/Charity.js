import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from "react-native";

export default function Charity() {

  return (
    <View style={styles.container}>
      <Text>This is the charity page</Text>
      <StatusBar style="auto"/>
    </View>
  ); 
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 25,
    justifyContent: 'flex-start',
    flexDirection: 'column', 
    backgroundColor: '#fff',
    },
});