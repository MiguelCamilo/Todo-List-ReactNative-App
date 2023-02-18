import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";

export default function tasks({ tasks, setTasks }) {
	// fetch taskList in useEffect
	// return scrollView w/ taskList mapped to TaskCard
	useEffect(() => {
		fetch(`https://todo-app-api-mc.web.app/tasks`)
			.then((res) => res.json())
			.then(setTasks)
			.catch((err) => console.error(err));
	}, []); // if setTaskList changes then re-run


    const toggleDone = (task) => {
        const done = !!!task.done 
        fetch(`https://todo-app-api-mc.web.app/tasks/${task.taskId}`, {
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
	}
})

