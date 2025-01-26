import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full height of the screen
  },
  middleContainer: {
    flex: 1, // Take up the remaining space between the top and bottom sections
    justifyContent: "center",
  },
  animationContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    // borderRadius: 20,
  },
  logoContainer: {
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
  },
  firstText: {
    fontSize: 45,
    color: "#DF7416",
    fontFamily: "BarlowBold",
  },
  viteText: {
    fontSize: 45,
    color: "#008ED6",
    fontFamily: "BarlowBold",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "BarlowSemiBold",
  },
  description: {
    fontSize: 16,
    fontFamily: "BarlowRegular",
    textAlign: "center",
    marginTop: 10,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20, 
    position: "absolute",
    bottom: 40, 
    marginBottom: 20,
  },
});

export default styles;
