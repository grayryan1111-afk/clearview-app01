import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import QuoteScreen from "../screens/QuoteScreen";
import QuoteHistoryScreen from "../screens/QuoteHistoryScreen";
import VisionScanScreen from "../screens/VisionScanScreen";
import GutterQuoteScreen from "../screens/GutterQuoteScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Quotes" component={QuoteScreen} />
      <Tab.Screen name="History" component={QuoteHistoryScreen} />
      <Tab.Screen name="Scan" component={VisionScanScreen} />
      <Tab.Screen name="Gutters" component={GutterQuoteScreen} />
    </Tab.Navigator>
  );
}
