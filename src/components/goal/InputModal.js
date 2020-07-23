import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import GoalInput from "./GoalInput";
import GoalActions from "./GoalActions";

function InputModal(props) {
  const { updateGoalText, addGoal, isVisible, cancel } = props;
  return (
    <View>
      <Modal
        // transparent={true}
        // transparent
        style={styles.Modal}
        visible={isVisible}
        animationType="slide"
      >
        <View style={styles.container}>
          <GoalInput updateGoalText={updateGoalText} />
          <GoalActions addGoal={addGoal} cancel={cancel} />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    // backfaceVisibility: "visible",
    // backgroundColor: "rgba(0,0,0,0.2)",
  },
  Modal: {
    // backgroundColor: "rgba(0,0,0,0.2)",
  },
});
export default InputModal;
