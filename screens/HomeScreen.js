import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen() {
  // TODO: make number of cookies pop up when you click the cookie then float up and fade out
  const dispatch = useDispatch();

  // timer that increments time played every second
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "INCREMENT_TIME" });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  const cookies = useSelector((state) => state.cookies);

  const upgrades = useSelector((state) => state.upgrades);

  const cookiesPerSecond = upgrades.reduce(
    (total, upgrade) => total + upgrade.multiplier * upgrade.owned,
    0
  );

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
    <ImageBackground
      source={require("../assets/bg-cc.jpeg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            fontFamily: "Avenir",
            color: "white",
            fontSize: 30,
            marginBottom: 20,
          }}
        >
          {cookies} Cookies
        </Text>
        <Text
          style={{
            fontFamily: "Avenir",
            color: "white",
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          {cookiesPerSecond}/sec
        </Text>
        <TouchableOpacity
          onPress={() => dispatch({ type: "INCREMENT_COOKIE" })}
        >
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
    </ImageBackground>
  );
}
