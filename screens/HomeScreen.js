import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const cookies = useSelector((state) => state.cookies);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{cookies} Cookies</Text>
      <Button
        title="Click Cookie"
        onPress={() => dispatch({ type: "INCREMENT_COOKIE" })}
      />
    </View>
  );
}
