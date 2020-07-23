import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Check from "../assetComponents/Check";
function GoalButton({ style, title, onPress, ChildComponent }) {
  let finalStyle = { ...preStyle.goalButton };
  if (style) {
    finalStyle = { ...finalStyle, ...style };
  }

  const press = () => {
    console.log("button pressed, calling onPress");
    onPress();
  };

  if (ChildComponent) {
    return (
      <TouchableOpacity activeOpacity={0.2} onPress={press} style={finalStyle}>
        <View>
          <ChildComponent></ChildComponent>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity activeOpacity={0.2} onPress={press} style={finalStyle}>
      <View>
        <Text> {title}</Text>
      </View>
    </TouchableOpacity>
  );
}
const preStyle = StyleSheet.create({
  goalButton: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#1ecbe1",
    padding: 5,
    borderRadius: 5,
    // textAlign: "center",
    alignItems: "center",
  },
});
export default GoalButton;
