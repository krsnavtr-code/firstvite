import { View, Text } from "react-native";
import React from "react";
import Brand from "@/components/Brand";

const Welcome = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Brand />
    </View>
  );
};

export default Welcome;
