import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full height of the screen
  },
  middleContainer: {
    flex: 1, // Take up the remaining space between the top and bottom sections
    justifyContent: "center", // Center the logo/name vertically
  },
  logoContainer: {
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
  },
  firstText: {
    fontSize: 35,
    color: "#DF7416",
    fontFamily: "BarlowBold",
  },
  viteText: {
    fontSize: 35,
    color: "#008ED6",
    fontFamily: "BarlowBold",
  },
  subtitle: {
    // fontSize: 20,
    fontFamily: "BarlowSemiBold",
  },
  description: {
    // fontSize: 18,
    fontFamily: "BarlowRegular",
    textAlign: "center",
    marginTop: 10,
  },
  buttonContainer: {
    width: "100%", // Full width for buttons
    paddingHorizontal: 20, // Horizontal padding for alignment
    position: "absolute", // Keep the buttons at the bottom
    bottom: 20, // Adjust the distance from the bottom of the screen
  },
});

export default styles;
