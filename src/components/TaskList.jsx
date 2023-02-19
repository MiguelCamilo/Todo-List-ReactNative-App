import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import TaskCard from "./TaskCard";
import { api_url } from "../secrets";

export default function tasks({ tasks, setTasks }) {
	// fetch taskList in useEffect
	// return scrollView w/ taskList mapped to TaskCard
	useEffect(() => {
		fetch(api_url.api)
			.then((res) => res.json())
			.then(setTasks)
			.catch((err) => console.error(err));
	}, []); // if setTaskList changes then re-run


    const toggleDone = (task) => {
        const done = !!!task.done 
        fetch(`${api_url.api}/${task.taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ done })   // body we need to send { done }
        })
        .then(res => res.json())
        .then(setTasks)
        .catch(err => console.error(err))
    }

	return (
		
		// if not tasks then showing loading but if there is then map through the taskList pass the props
		<ScrollView style={styles.body}>
			{!tasks ? (
				<Text style={styles.h1}>Loading...</Text>
			) : (
				tasks.map((element) => (
					<TouchableOpacity key={element.taskId}  onPress={() => toggleDone(element)}>
						<TaskCard data={element} setTasks={setTasks} />
					</TouchableOpacity>
				))
			)}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	body: {
		height: "100%",
		backgroundColor: "#F4F5F6"
	},
	h1: {
		fontSize: 30,
		fontWeight: "700",
		textAlign: "center",
		marginTop: 20,
		marginBottom: 10,
	},
})

