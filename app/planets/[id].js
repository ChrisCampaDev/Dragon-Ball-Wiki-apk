import { View, ActivityIndicator, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getPlanetbyID } from "../../api/dragonBall.api";
import { PlanetDetail } from "../../components/PlanetDetail";

export default function Detail() {
	const { id } = useLocalSearchParams();
	const [character, setCharacter] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCharacter = async () => {
			try {
				setLoading(true);
				const data = await getPlanetbyID(id);
				setCharacter(data);
				console.log(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		if (id) {
			fetchCharacter();
		}
	}, [id]);

	if (loading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ActivityIndicator size="large" color="#f89719" />
				<Text>Cargando planeta...</Text>
			</View>
		);
	}

	return <PlanetDetail planet={character} />;
}
