// src/components/QuoteCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function QuoteCard({ quote }) {
  return (
    <View style={styles.card}>
      <Text style={styles.address}>{quote.address}</Text>
      <Text style={styles.line}>Height: {quote.height} m</Text>
      <Text style={styles.line}>Windows: {quote.window_count}</Text>
      <Text style={styles.price}>${quote.price.toFixed(2)}</Text>
      <Text style={styles.date}>
        {new Date(quote.created_at).toLocaleString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  address: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  line: {
    fontSize: 14,
    color: "#555",
  },
  price: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: "700",
    color: "#0D9488",
  },
  date: {
    marginTop: 4,
    fontSize: 12,
    color: "#777",
  },
});
