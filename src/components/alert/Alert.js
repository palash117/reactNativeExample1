import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Alert(props) {
  const { messages } = props;
  //   console.log("rendering Alert with props ", props);
  if (!messages || messages.length === 0) {
    return <View></View>;
  }
  return (
    <View style={style.messagebox}>
      {messages &&
        messages.map((message) => (
          <Text style={style.message} key={message.id}>
            {message.message}
          </Text>
        ))}
    </View>
  );
}

const style = StyleSheet.create({
  message: {
    color: "white",
    fontSize: 18,
  },
  messagebox: {
    backgroundColor: "red",
    color: "white",
    padding: 20,
    position: "absolute",
    top: 50,
    flexDirection: "column",
    shadowColor: "maroon",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    borderRadius: 5,
  },
});
export default Alert;
