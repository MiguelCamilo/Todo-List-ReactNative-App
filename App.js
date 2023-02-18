import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import TaskList from "./src/components/TaskList";
import AddTask from "./src/components/AddTask";

export default function App() {
	const [tasks, setTasks] = useState();

	return (
		<SafeAreaView>
			<StatusBar style={styles.area} />
			<Text style={styles.h1}>To Do List</Text>
			<AddTask setTasks={setTasks} />
			<TaskList tasks={tasks} setTasks={setTasks} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	h1: {
		fontSize: 30,
		fontWeight: "700",
		textAlign: "center",
		marginTop: 20,
		marginBottom: 10,
	},
  area: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 5,
    shadowRadius: 2, 
  }
});
