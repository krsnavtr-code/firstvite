import { View, Text } from "react-native";
import React, { useRef } from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import styles from "../app/css/brandStyles";
import Button from "./Button";
import { router } from "expo-router";
import LottieView from "lottie-react-native";

const Brand = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.container}>
      {/* Animation Section */}
      <Animated.View
        style={styles.animationContainer}
        entering={FadeInUp.duration(300).springify()}
      >
        <LottieView
          ref={animation}
          source={require("../assets/animation/animation.json")}
          autoPlay
          loop
          style={{ width: 300, height: 300 }}
        />
      </Animated.View>

      {/* Logo/Name Section */}
      <View style={styles.middleContainer}>
        <Animated.View
          style={styles.logoContainer}
          entering={FadeInUp.duration(300).delay(100).springify()}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.firstText}>First</Text>
            <Text style={styles.viteText}>Vite</Text>
          </View>
          <Text style={styles.subtitle}>E-Learning Private Limited</Text>
          <View>
            <Text style={styles.description}>
              Best Platform To Learn Technical Courses 🚀
            </Text>
          </View>
        </Animated.View>
      </View>

      {/* Buttons Section */}
      <Animated.View
        style={styles.buttonContainer}
        entering={FadeInUp.duration(300).delay(100).springify()}
      >
        <Text
          style={{
            backgroundColor: "#DF7416",
            color: "#fff",
            fontSize: 16,
            fontWeight: "400",
            textTransform: "uppercase",
            borderRadius: 8,
            paddingVertical: 9,
            paddingHorizontal: 15,
            alignSelf: "center",
          }}
          onPress={() => router.push("/(tabs)")}
        >
          Explore All Corses
        </Text>
        <View style={{ height: 1 }} /> {/* Spacer between buttons */}
        <Button title="Sign In" action={() => router.push("/(tabs)")} />
      </Animated.View>
    </View>
  );
};

export default Brand;
