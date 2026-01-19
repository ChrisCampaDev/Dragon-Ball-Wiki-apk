import { View } from "react-native";
import { global } from "../styles/sheets";
import { Stack } from "expo-router";

export default function Layout() {
	return (
		<View style={global.container}>
			<Stack
				screenOptions={{
					headerShown: false,
					animation: "simple_push",
				}}
			/>
		</View>
	);
}
