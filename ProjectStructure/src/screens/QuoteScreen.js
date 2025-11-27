// src/screens/QuoteScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import {
  createBuildingQuote,
  createGutterQuote,
} from "../api/client";

export default function QuoteScreen() {
  const [address, setAddress] = useState("");
  const [height, setHeight] = useState("");
  const [windowCount, setWindowCount] = useState("");
  const [linearFeet, setLinearFeet] = useState("");
  const [stories, setStories] = useState("");
  const [buildingPrice, setBuildingPrice] = useState(null);
  const [gutterPrice, setGutterPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const calcBuildingPriceLocal = () => {
    const h = parseFloat(height) || 0;
    const w = parseInt(windowCount || "0", 10);
    if (!address || !h || !w) {
      Alert.alert("Missing info", "Address, height, and windows are required.");
      return;
    }
    // Simple formula you can tweak later
    const basePerWindow = 3.0;
    const heightMultiplier = 1 + (h / 10) * 0.25;
    const price = w * basePerWindow * heightMultiplier;
    setBuildingPrice(price);
  };

  const handleSaveBuildingQuote = async () => {
    if (!buildingPrice) {
      calcBuildingPriceLocal();
    }
    try {
      setLoading(true);
      const price = buildingPrice ?? 0;
      const result = await createBuildingQuote({
        address,
        height: parseFloat(height) || 0,
        windowCount: parseInt(windowCount || "0", 10),
        price,
      });
      setLoading(false);
      Alert.alert("Saved", `Quote saved with id: ${result.id}`);
    } catch (e) {
      setLoading(false);
      console.error(e);
      Alert.alert("Error", "Could not save quote. Check backend URL.");
    }
  };

  const handleGutterQuote = async () => {
    const lf = parseFloat(linearFeet) || 0;
    const s = parseInt(stories || "1", 10);
    if (!address || !lf || !s) {
      Alert.alert(
        "Missing info",
        "Address, linear feet,
