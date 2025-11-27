import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import API from "../services/api";

export default function GutterQuoteScreen() {
  const [length, setLength] = useState("");
  const [price, setPrice] = useState(null);

  const getQuote = async () => {
    const res = await API.post("/quotes/gutters", { length });
    setPrice(res.data.price);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter gutter length (ft):</Text>

      <TextInput
        value={length}
        onChangeText={setLength}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
        keyboardType="numeric"
      />

      <Button title="Get Quote" onPress={getQuote} />

      {price && <Text style={{ marginTop: 20 }}>Gutter Quote: ${price}</Text>}
    </View>
  );
}
