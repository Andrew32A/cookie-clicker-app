import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

export default function StatsScreen() {
  const clicks = useSelector((state) => state.clicks);
  const cookies = useSelector((state) => state.cookies);
  const totalUpgradesPurchased = useSelector(
    (state) => state.totalUpgradesPurchased
  );
  const timePlayed = useSelector((state) => state.timePlayed);
  const data = [
    { key: "1", title: "Total Clicks", value: clicks.toString() },
    { key: "2", title: "Total Cookies", value: cookies.toString() },
    {
      key: "3",
      title: "Total Upgrades Purchased",
      value: totalUpgradesPurchased.toString(),
    },
    {
      key: "4",
      title: "Time Played (in seconds)",
      value: timePlayed.toString(),
    },
    // TODO: add more stats here
    // ideas: number of total upgrades purchased, time played
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
