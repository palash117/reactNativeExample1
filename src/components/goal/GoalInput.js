import React, { useState } from "react";
import { TextInput } from "react-native";

function GoalInput({ updateGoalText }) {
  const [inputText, setInputText] = useState("");
  const updateText = (inputText) => {
    setInputText(inputText);
    updateGoalText(inputText);
  };
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={updateText}
      value={inputText}
    />
  );
}
const styles = {
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    margin: 20,
    paddingHorizontal: 20,
    width: "60%",
  },
};
export default GoalInput;
