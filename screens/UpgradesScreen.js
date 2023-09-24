import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function UpgradesScreen() {
  const dispatch = useDispatch();
  const cookies = useSelector((state) => state.cookies);
  const upgrades = useSelector((state) => state.upgrades);

  const purchaseUpgrade = (id, price, owned) => {
    if (cookies >= price * (owned + 1)) {
      dispatch({ type: "PURCHASE_UPGRADE", id: id });
    }
  };

  return (
    <FlatList
      data={upgrades}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
        >
          <Text>
            {item.name} ({item.owned} owned)
          </Text>
          <Text>Cost: {item.basePrice * (item.owned + 1)} cookies</Text>
          <Text>Effect: +{item.multiplier} cookies per click</Text>
          <Button
            title={`Buy ${item.name}`}
            onPress={() => purchaseUpgrade(item.id, item.basePrice, item.owned)}
          />
        </View>
      )}
    />
  );
}
