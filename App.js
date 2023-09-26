import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // use this to find icons: https://oblador.github.io/react-native-vector-icons/
import store from "./store";

import HomeScreen from "./screens/HomeScreen";
import StatsScreen from "./screens/StatsScreen";
import UpgradesScreen from "./screens/UpgradesScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "cookie" : "cookie-outline";
              } else if (route.name === "Stats") {
                iconName = focused ? "chart-line" : "chart-line";
              } else if (route.name === "Upgrades") {
                iconName = focused ? "arrow-up" : "arrow-up";
              }

              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Stats" component={StatsScreen} />
          <Tab.Screen name="Upgrades" component={UpgradesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
