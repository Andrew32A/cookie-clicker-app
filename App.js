import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import store from "./store";

import HomeScreen from "./screens/HomeScreen";
import StatsScreen from "./screens/StatsScreen";
import UpgradesScreen from "./screens/UpgradesScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Stats" component={StatsScreen} />
          <Tab.Screen name="Upgrades" component={UpgradesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
