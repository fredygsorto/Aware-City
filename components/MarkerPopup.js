import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const MarkerPopup = ({
  visible,
  onClose,
  title,
  description,
  address,
  hours,
  phone,
}) => {
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.container}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <FontAwesome name="close" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.row}>
            <FontAwesome
              name="map-marker"
              size={16}
              color="#007AFF"
              style={styles.icon}
            />
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  `https://www.google.com/maps/search/?api=1&query=${address}`
                )
              }
            >
              <Text style={styles.linkText}>{address}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <FontAwesome
              name="clock-o"
              size={16}
              color="#007AFF"
              style={styles.icon}
            />
            <Text style={styles.info}>{hours}</Text>
          </View>
          <View style={styles.row}>
            <FontAwesome
              name="phone"
              size={16}
              color="#007AFF"
              style={styles.icon}
            />
            <TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)}>
              <Text style={styles.linkText}>{phone}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  card: {
    backgroundColor: "#FCE9D8",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginTop: 5,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    left: 10,
    padding: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  icon: {
    marginRight: 5,
  },
  linkText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#007AFF",
    textDecorationLine: "underline",
  },
});

export default MarkerPopup;
