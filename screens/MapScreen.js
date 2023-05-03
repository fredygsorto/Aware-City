import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Carousel from "react-native-snap-carousel";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Location from "expo-location";
import sortByDistance from "sort-by-distance";

import { markers } from "../MapData";
import Loading from "./Loading";

export default function MapScreen() {
  // User location
  const [location, setLocation] = useState(null);

  // Carousel linking with Marker Index
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);

  const mapRef = useRef(null);

  const [showHomelessShelters, setShowHomelessShelters] = useState(true);
  const [showFoodPantries, setShowFoodPantries] = useState(true);

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
      // console.log("Location: ");
      // console.log(currentLocation);
    };
    getPermissions();
  }, []);

  if (!location) {
    return <Loading />;
  }

  // Calculate distance between two coordinates using haversine formula
  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d / 1.609; // Distance in miles
  }

  // Sort the markers array based on distance from the user's location
  const sortedMarkers = markers.sort((a, b) => {
    const distanceA = getDistance(
      location.coords.latitude,
      location.coords.longitude,
      a.coordinate.latitude,
      a.coordinate.longitude
    );
    const distanceB = getDistance(
      location.coords.latitude,
      location.coords.longitude,
      b.coordinate.latitude,
      b.coordinate.longitude
    );
    return distanceA - distanceB;
  });

  // const sortedMarkers = sortByDistance(markers, {
  //   lat: location.coords.latitude,
  //   lon: location.coords.longitude,
  // });

  // console.log("Latitude: " + location.coords.latitude);
  // console.log("Longitude: " + location.coords.longitude);

  // markers.forEach((marker) => {
  //   console.log(
  //     `${marker.title}: ${marker.coordinate.latitude}, ${marker.coordinate.longitude}`
  //   );
  // });

  const limitCarouselCard = sortedMarkers.slice(0, 4);

  const handleCenter = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location?.coords?.latitude,
        longitude: location?.coords?.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      });
    }
  };

  // Function to render items in the carousel card
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.carouselContainer}>
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
        {/* <TouchableOpacity>
          <Text>Get Directions</Text>
        </TouchableOpacity> */}
      </View>
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
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    };
    mapRef.current.animateToRegion(region);
  };

  const selectedMarkers = limitCarouselCard.filter(
    (item, index) => index === selectedMarkerIndex
  );

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
        showsUserLocation={true}
        followsUserLocation={false}
      >
        {/* previous marker */}
        {/* {markers.map((marker) => (
          <Marker
            key={marker.title}
            coordinate={marker.coordinate}
            pinColor={marker.pinColor}
            title={marker.title}
            description={marker.description}
          />
        ))} */}

        {markers
          .filter(
            (marker) =>
              (showHomelessShelters && marker.type === "homeless_shelter") ||
              (showFoodPantries && marker.type === "food_pantry")
          )
          .map((marker) => (
            <Marker
              key={marker.title}
              coordinate={marker.coordinate}
              pinColor={marker.pinColor}
              title={marker.title}
              description={marker.description}
            />
          ))}
      </MapView>
      {/* filters */}
      <View style={styles.filterBox}>
        <View style={styles.filter}>
          <Switch
            value={showHomelessShelters}
            onValueChange={(value) => setShowHomelessShelters(value)}
          />
          <Text>Homeless Shelters</Text>
        </View>

        <View style={styles.filter}>
          <Switch
            value={showFoodPantries}
            onValueChange={(value) => setShowFoodPantries(value)}
          />
          <Text>Food Pantries</Text>
        </View>
      </View>

      <Carousel
        containerCustomStyle={styles.carousel}
        data={sortedMarkers.filter(
          (marker) =>
            (showHomelessShelters && marker.type === "homeless_shelter") ||
            (showFoodPantries && marker.type === "food_pantry")
        )}
        renderItem={renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={300}
        firstItem={selectedMarkerIndex}
        onSnapToItem={onCarouselItemChange}
      />
      {/* <TouchableOpacity style={styles.button} onPress={handleCenter}>
        <Ionicons name="navigate" size={24} color="blue" />
      </TouchableOpacity> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
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
  filterBox: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#FCE9D8",
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
});
