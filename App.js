import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import MapScreen from "./screens/MapScreen";
import Charity from "./screens/Charity";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomTab from "./routes/BottomTab";
import Playground from "./Playground";

export default function App() {
  return <BottomTab />;
}
