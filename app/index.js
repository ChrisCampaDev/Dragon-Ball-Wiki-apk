import Planets from "../screens/Planets.js";
import Main from "../screens/Main.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			screenOptions={{
				animation: "shift",
				headerTitleAlign: "center",
				tabBarInactiveTintColor: "white",
			}}
		>
			<Tab.Screen
				options={{
					title: "Personajes",
					tabBarActiveTintColor: "#fc7e01ff",
					tabBarIcon: () => (
						<FontAwesome6 name="person" size={24} color="black" />
					),
				}}
				name="Characters"
				component={Main}
			/>
			<Tab.Screen
				options={{
					title: "Planetas",
					tabBarActiveTintColor: "#fc7e01ff",
					tabBarIcon: () => (
						<FontAwesome6 name="earth-africa" size={24} color="black" />
					),
				}}
				name="Planets"
				component={Planets}
			/>
		</Tab.Navigator>
	);
}

export default function IndexMain() {
	return <MyTabs />;
}
