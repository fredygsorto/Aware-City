import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Carousel from "react-native-snap-carousel";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { markers } from "./MapData";

export default function App() {
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);
  const mapRef = useRef(null);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.carouselItem}
        onPress={() => {
          setSelectedMarkerIndex(index);
          animateToSelectedMarker(index);
        }}
      >
        <Text style={styles.carouselTitle}>{item.title}</Text>
        <Text style={styles.carouselDescription}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  const onCarouselItemChange = (index) => {
    setSelectedMarkerIndex(index);
    animateToSelectedMarker(index);
  };

  const animateToSelectedMarker = (index) => {
    const { coordinate } = markers[index];
    const region = {
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    mapRef.current.animateToRegion(region);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        ref={mapRef}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.title}
            coordinate={marker.coordinate}
            pinColor={marker.pinColor}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
      <Carousel
        containerCustomStyle={styles.carousel}
        data={markers}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={300}
        firstItem={selectedMarkerIndex}
        onSnapToItem={onCarouselItemChange}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          animateToSelectedMarker(selectedMarkerIndex);
        }}
      >
        <Ionicons name="navigate" size={24} color="blue" />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousel: {
    position: "absolute",
    bottom: 0,
    marginBottom: 48,
  },
  carouselItem: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  carouselTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  carouselDescription: {
    fontSize: 14,
  },
  button: {
    position: "absolute",
    bottom: 0,
    marginBottom: 20,
    right: 0,
    marginRight: 20,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
