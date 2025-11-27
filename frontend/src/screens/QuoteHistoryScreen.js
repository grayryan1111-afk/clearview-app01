import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import API from "../services/api";

export default function QuoteHistoryScreen() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    API.get("/quotes/history").then((res) => {
      setHistory(res.data);
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 15, borderBottomWidth: 1 }}>
            <Text>Windows: {item.windows}</Text>
            <Text>Price: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}
