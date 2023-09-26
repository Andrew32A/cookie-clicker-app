import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const cookies = useSelector((state) => state.cookies);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{cookies} Cookies</Text>
      <TouchableOpacity onPress={() => dispatch({ type: "INCREMENT_COOKIE" })}>
        <Image
          source={require("../assets/cookie.webp")}
          style={{ width: 300, height: 300 }}
        />
      </TouchableOpacity>
    </View>
  );
}
