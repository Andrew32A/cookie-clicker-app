import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

export default function StatsScreen() {
  const cookies = useSelector((state) => state.cookies);
  const data = [
    { key: "1", title: "Total Cookies", value: cookies.toString() },
    // TODO: add more stats here
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
        >
          <Text>
            {item.title}: {item.value}
          </Text>
        </View>
      )}
    />
  );
}
