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
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              color: "#007AFF",
              textDecorationLine: "underline",
            }}
            onPress={() =>
              Linking.openURL(
                `https://www.google.com/maps/search/?api=1&query=${address}`
              )
            }
            numberOfLines={1}
          >
            {address}
          </Text>
          <Text style={styles.info}>{hours}</Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              color: "#007AFF",
              textDecorationLine: "underline",
            }}
            onPress={() => Linking.openURL(`tel:${item.phone}`)}
          >
            {phone}
          </Text>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  card: {
    backgroundColor: "#FCE9D8",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    marginTop: 10,
    textAlign: "center",
    marginBottom: 20,
  },
  info: {
    marginTop: 5,
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 5,
  },
  closeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});

export default MarkerPopup;
