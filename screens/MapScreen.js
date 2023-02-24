import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Circle,
  handleCenter,
} from "react-native-maps";
import Carousel from "react-native-snap-carousel";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Location from "expo-location";
import { markers } from "../MapData";

export default function MapScreen() {

  // User location
  const [location, setLocation] = useState();
  const mapRef = useRef(null);

  // Getting user permission and location
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

  if (!location) {
    return <Text>Loading...</Text>;
  }

  // const handleCenter = () => {
  //   if (mapRef.current) {
  //     mapRef.current.animateToRegion({
  //       latitude: location?.coords?.latitude,
  //       longitude: location?.coords?.longitude,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     });
  //   }
  // };

  // Function to render items in the carousel card
  renderItem = ({ item }) => {
    return (
      <View style={styles.carouselContainer}>
        <Text style={styles.carouselTitle}>{item.title}</Text>
        <Text style={styles.carouselDescription}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location?.coords?.latitude || 37.78825,
          longitude: location?.coords?.longitude || -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        ref={mapRef}
      >
        {/* <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title="You are here"
        /> */}
        {markers.map((marker) => (
          <Marker
            key={marker.title}
            coordinate={marker.coordinate}
            pinColor={marker.pinColor}
            title={marker.title}
            description={marker.description}
          />
        ))}
        {location && (
          <Circle
            center={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            radius={location.coords.accuracy}
            fillColor="rgba(0, 0, 255, 255)"
            strokeColor="rgba(0, 0, 255, 0.3)"
            strokeWidth={1}
          />
        )}
      </MapView>
      <Carousel
        containerCustomStyle={styles.carousel}
        data={markers}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={300}
      />
      <TouchableOpacity style={styles.button} onPress={handleCenter}>
        <Text style={styles.buttonText}>Center</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    position: "absolute",
    bottom: 0,
    marginBottom: 48,
  },
  carouselContainer: {
    backgroundColor: "#FCE9D8",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    // height: 200,
    // width: 300,
  },
  carouselTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333333",
    overflow: "hidden",
    height: 60, // set a fixed height for the title
  },
  carouselDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666666",
  },
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  // Callout bubble
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  // Character image
  image: {
    width: "100%",
    height: 80,
  },
  header: {
    backgroundColor: "#fdf4d7",
    paddingTop: 50,
  },
  title: {
    textAlign: "center",
    color: "brown",
    fontSize: 20,
    paddingBottom: 5,
  },
});
