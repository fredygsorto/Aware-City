import { Image, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

import { markers } from "../MapData";

export default function MapScreen() {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: 40.7695555,
        longitude: -73.9846066,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Aware City</Text>
      </View>
      <Marker
        coordinate={{
          latitude: 40.7653172,
          longitude: -73.9891161,
        }}
        pinColor="black"
        // image={require("./assets/shelter-icon.png")}
        title="Covenant House Mother & Child"
        description="Homeless Shelter"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>Homeless Shelter</Text>
              <Text>A short description</Text>
              <Image
                style={styles.image}
                source={require("../assets/shelter-icon.png")}
              />
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
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
