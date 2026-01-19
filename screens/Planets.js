import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { getPlanets } from "../api/dragonBall.api";
import { AnimatedCard } from "../components/PjCard";

export default function Planets() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getPlanets().then(planets => {
			setData(planets);
			setTimeout(() => {
				setLoading(false);
			}, 500);
		});
	}, []);

	return (
		<View>
			{loading ? (
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						flex: 1,
						backgroundColor: "white",
					}}
				>
					<ActivityIndicator size={"large"} color="#f89719" />
				</View>
			) : (
				<FlatList
					data={data}
					initialNumToRender={5}
					refreshing={false}
					keyExtractor={data => data.id.toString()}
					renderItem={({ item, index }) => (
						<AnimatedCard data={item} index={index} planets={true} />
					)}
				/>
			)}
		</View>
	);
}
