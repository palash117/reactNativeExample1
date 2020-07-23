import React from "react";
import { Text } from "react-native";

function GoalItem(props) {
  const { itemData } = props;
  let style = styles.goal;
  if (itemData.index % 2 == 1) {
    style = { ...style, ...styles.alternateGoal };
  }
  return <Text style={style}>{itemData.item.goal}</Text>;
}

const styles = {
  goal: {
    textAlign: "center",
    paddingVertical: 10,
  },
  alternateGoal: {
    backgroundColor: "rgba(0,0,0, 0.3)",
  },
};

export default GoalItem;
