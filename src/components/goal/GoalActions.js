import React from "react";
import { Button, View, StyleSheet } from "react-native";
import GoalButton from "./GoalButton";
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from "react-native-fontawesome";
import Check from "../assetComponents/Check";
import Cross from "../assetComponents/Cross";

function GoalActions({ addGoal, cancel }) {
  return (
    <View style={styles.actionContainer}>
      <GoalButton
        style={{ ...styles.button, ...styles.add }}
        title="ADD"
        onPress={() => {
          return addGoal();
        }}
        ChildComponent={Check}
      ></GoalButton>
      <GoalButton
        style={styles.button}
        title="CANCEL"
        color="#f194ff"
        onPress={() => {
          return cancel();
        }}
        ChildComponent={Cross}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  add: {
    backgroundColor: "#1ecbe1",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#f194ff",
    color: "#f194ff",
    // margin: 10,
  },
  actionContainer: {
    position: "absolute",
    bottom: 50,
    right: 20,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default GoalActions;
