import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useCallback } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import Carousel from "react-native-snap-carousel";

import { markers } from "../MapData";

export default function MapScreen() {
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
          latitude: 40.7695555,
          longitude: -73.9846066,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
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
      />

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
    borderColor: "brown",
    borderWidth: 1,
    borderRadius: 24,
    padding: 24,
    // height: 200,
    // width: 300,
  },
  carouselTitle: {
    fontWeight: "bold",
  },
  carouselDescription: {},
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
