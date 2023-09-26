import React, { useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const cookies = useSelector((state) => state.cookies);

  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      })
    );

    spinAnimation.start();

    return () => spinAnimation.stop();
  }, [rotation]);

  const rotationInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontFamily: "Avenir", fontSize: 30, marginBottom: 20 }}>
        {cookies} Cookies
      </Text>
      <TouchableOpacity onPress={() => dispatch({ type: "INCREMENT_COOKIE" })}>
        <Animated.Image
          source={require("../assets/cookie.webp")}
          style={{
            width: 300,
            height: 300,
            transform: [{ rotate: rotationInterpolate }],
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
