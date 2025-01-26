import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  action?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, action }: ButtonProps) => {
  return (
    <Pressable onPress={action} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#008ED6",
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Button;
