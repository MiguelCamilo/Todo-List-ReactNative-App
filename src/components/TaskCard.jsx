import { View, Text, StyleSheet, Button } from "react-native";

export default function TaskCard({ data }) {
	const { tasks, done } = data;

	return (
		<View style={styles.taskCardContainer}>
			{/* using a ternary if done is true then using set styling */}
			<Text style={done ? styles.textColorDone : styles.textColor }>{tasks}</Text>
				{/* <Button style={styles.button} title="Delete"/> */}
		</View>
	);
}

const styles = StyleSheet.create({
	taskCardContainer: {
		backgroundColor: "#E9E4E4",
		padding: 20,
		alignItems: 'center',
		marginTop: 10,
		borderRadius: 13,
		marginHorizontal: 20,
	},
	textColor: {
		fontSize: 20,
		color: "black",
		textTransform: "capitalize",
        textAlign: 'center'
	},
	textColorDone: {
		fontSize: 20,
		color: "#A0A0A0",
		textTransform: 'capitalize',
		textDecorationLine: 'line-through'
	},
	button: {
		marginLeft: 10,
	},
});
