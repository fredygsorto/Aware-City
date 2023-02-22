import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import MapScreen from "../screens/MapScreen";
import Charity from "../screens/Charity";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "MapScreen") {
              iconName = focused ? "map" : "map-outline";
            } else if (route.name === "Charity") {
              iconName = focused ? "heart-half" : "heart-half-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#CD7F32",
          tabBarInactiveTintColor: "#000000",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ tabBarBadge: 1 }}
        />
        <Tab.Screen name="Charity" component={Charity} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
