import {
	View,
	Text,
	StyleSheet,
	Pressable,
	TouchableOpacity,
} from "react-native";

export default function TaskCard({ data }) {
	const { tasks, done } = data;

	const handleDelete = () => {
	};

	return (
		<View style={styles.taskCardContainer}>
			{/* using a ternary if done is true then using set styling */}
			<Text style={done ? styles.textColorDone : styles.textColor}>
				{tasks}
			</Text>
			<Pressable style={styles.pressable} onPress={handleDelete}>
				<TouchableOpacity>
					<Text style={styles.delete}>Delete</Text>
				</TouchableOpacity>
			</Pressable>
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
	},
	textColor: {
		fontSize: 20,
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
		padding: 8,
		borderRadius: 10,
		backgroundColor: "red",
		color: "white",
	},
	delete: {
		color: "white",
	},
});
