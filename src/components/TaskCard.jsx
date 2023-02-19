import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { api_url } from "../secrets";

export default function TaskCard({ data, setTasks }) {
	const { tasks, done, taskId } = data;

	const handleDelete = () => {
		fetch(`${api_url.api}/${taskId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then(setTasks)
			.catch((err) => console.error(err));
	};

	return (
		<View style={styles.taskCardContainer}>
			{/* using a ternary if done is true then using set styling */}
			<Text style={done ? styles.textColorDone : styles.textColor}>
				{tasks}
			</Text>

			<TouchableOpacity style={styles.pressable} onPress={handleDelete}>
				<Text style={styles.delete}>Delete</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	taskCardContainer: {
		backgroundColor: "#E9E4E4",
		padding: 20,
		alignItems: "center",
		marginTop: 10,
		borderRadius: 13,
		marginHorizontal: 20,
		display: "flex",
		flexDirection: "column",
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.5,
		shadowRadius: 1, 
	},
	textColor: {
		paddingBottom: 13,
		fontSize: 20,
		fontWeight: "700",
		color: "black",
		textTransform: "capitalize",
		textAlign: "center",
	},
	textColorDone: {
		fontSize: 20,
		color: "#A0A0A0",
		textTransform: "capitalize",
		textDecorationLine: "line-through",
	},
	pressable: {
		marginTop: 5,
		padding: 14,
		borderRadius: 10,
		backgroundColor: "red",
		color: "white",
	},
	delete: {
		color: "white",
		fontWeight: "700"
	},
});
