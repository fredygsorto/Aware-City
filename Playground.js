import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function Playground() {
  const [location, setLocation] = useState();

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("please grant location permissions");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log("Location: ");
      console.log(currentLocation);
    };
    getPermissions();
  }, []);

  return (
    <View>
      <Text>Playground</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
