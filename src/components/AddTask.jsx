import { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import { Keyboard } from "react-native";
import { api_url } from "../secrets";

export default function AddTask({ setTasks }) {
	// manage state
	const [task, setTask] = useState("");

	// when the handleAdd func runs it will take the value entered
	// and store in in the newTask obj then after the fetch it
	// will send that information as a JSON string
	const handleAddTask = () => {
		// console.log(task)
		if (!task) {
			return;
		}
		const newTask = {
			done: false,
			tasks: task,
		};

		fetch(`${api_url.api}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTask),
		})
			.then((res) => res.json())
			.then(setTasks) // this is being passed from TaskList as a prop
			.catch((err) => console.error(err));
			
			setTask("")
			Keyboard.dismiss()
	};


	return (
		<View style={styles.body}>
			<TextInput
				style={styles.textInput}
				placeholder="Enter a task"
				value={task}
				onChangeText={setTask}
			/>
			<Pressable style={styles.pressable} onPress={handleAddTask}>
				<Text style={styles.button}>Add Task</Text>
			</Pressable>
		</View >
	);
}

const styles = StyleSheet.create({
	textInput: {
		fontWeight: "700",
		textAlign: "center",
		marginTop: 30,
		marginBottom: 20,
		marginHorizontal: 40,
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
	},
	button: {
        color: "white",
		fontWeight: "700"
	},
    pressable: {
		padding: 10,
        alignItems: "center",
        width: "30%",
        backgroundColor: 'green',
        borderRadius: 10,
        marginLeft: 130,
		marginBottom: 10
    },
	body: {
		backgroundColor: "#F4F5F6",
		shadowColor: 'black',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 5,
		shadowRadius: 3, 
	}
});
