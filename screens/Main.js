import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { getData } from "../api/dragonBall.api";
import { AnimatedCard } from "../components/PjCard";

export default function Main() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getData().then(pjs => {
			setData(pjs);
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
						<AnimatedCard data={item} index={index} planets={false} />
					)}
				/>
			)}
		</View>
	);
}
