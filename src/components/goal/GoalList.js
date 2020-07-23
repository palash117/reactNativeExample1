import React from "react";
import {
  FlatList,
  View,
  TouchEvent,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import GoalItem from "./GoalItem";

function GoalList({ goals, deleteGoal }) {
  console.log("GoalList rendered with goals ", goals.length);
  return (
    <View style={styles.goalContainer}>
      {goals && goals.length > 0 ? ( //
        <FlatList
          style={styles.goalScroller}
          data={goals}
          renderItem={(itemData) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  console.log("goal pressed", itemData.item.key);
                  deleteGoal(itemData.item.key);
                }}
              >
                <GoalItem key={itemData.key} itemData={itemData} />
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      ) : (
        <Text style={styles.goals}>
          No goals yet? What are you waiting for?
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  goalScroller: {
    width: "100%",
    // border: "black",
  },
  goals: {
    textAlign: "center",
  },
  goalContainer: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    height: "85%",
    // borderWidth: 1,
    padding: 10,
    marginHorizontal: 2,
  },
});

export default GoalList;
