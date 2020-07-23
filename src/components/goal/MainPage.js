import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import Spinner from "../Spinner";
import GoalList from "./GoalList";
import InputModal from "./InputModal";
import Alert from "../alert/Alert";
import GoalButton from "./GoalButton";
import Check from "../assetComponents/Check";
import Add from "../assetComponents/Add";

function MainPage() {
  const [inputText, setInputText] = useState("");
  const [goals, setGoals] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const updateGoalText = (text) => {
    setInputText(text);
  };

  const addAlert = (alertMessage) => {
    console.log("adding alert");
    let id = Math.random().toString();
    let alert = { id, message: alertMessage };
    console.log(" new alert ", alert);
    setAlerts([alert]);
    console.log("alert state:", alerts);
    setTimeout(() => {
      //   console.log("removing alert from alerts ", alerts, e.id);
      setAlerts(alerts.filter((e) => e.id !== id));
    }, 1000);
  };

  const addGoal = () => {
    updateInputModalVisibility(false);
    console.log("inputtext is ", inputText);
    if (inputText === "") {
      addAlert("Please enter some goal!");
    } else {
      setGoals([...goals, { key: Math.random().toString(), goal: inputText }]);
      setInputText("");
    }
  };
  const deleteGoal = (id) => {
    setGoals(goals.filter((g) => g.key !== id));
  };
  const [isVisible, setIsVisisble] = useState(false);
  const updateInputModalVisibility = (visibility) => {
    setIsVisisble(visibility);
  };
  const showInputModal = () => {
    updateInputModalVisibility(true);
  };
  const closeInputModal = () => {
    updateInputModalVisibility(false);
  };

  return (
    <View style={styles.mainContainer}>
      <Spinner />
      {/* <Check /> */}
      <Alert messages={alerts} />
      <InputModal
        addGoal={addGoal}
        updateGoalText={updateGoalText}
        isVisible={isVisible}
        cancel={closeInputModal}
      />
      <GoalButton
        style={styles.addGoal}
        title="+GOAL"
        onPress={showInputModal}
        ChildComponent={Add}
      />
      <GoalList goals={goals} deleteGoal={deleteGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    marginTop: 30,
    paddingTop: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  addGoal: {
    position: "absolute",
    bottom: 0,
    right: 20,
    zIndex: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    fontSize: 18,
  },
});

export default MainPage;
