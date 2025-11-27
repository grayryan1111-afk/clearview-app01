import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import API from "../services/api";

export default function QuoteScreen() {
  const [windows, setWindows] = useState("");
  const [price, setPrice] = useState(null);

  const getQuote = async () => {
    const res = await API.post("/quotes/create", { windows });
    setPrice(res.data.price);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter number of windows:</Text>

      <TextInput
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
        keyboardType="numeric"
        value={windows}
        onChangeText={setWindows}
      />

      <Button title="Get Quote" onPress={getQuote} />

      {price && <Text style={{ marginTop: 20 }}>Price: ${price}</Text>}
    </View>
  );
}
