import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getDatabyID } from "../api/dragonBall.api";
import { details, global } from "../styles/sheets";
import DetailCard from "../components/detail";

export default function Detail() {
	const { id } = useLocalSearchParams();
	const router = useRouter();
	const [character, setCharacter] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCharacter = async () => {
			try {
				setLoading(true);
				const data = await getDatabyID(id);
				setCharacter(data);
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
				<Text>Cargando personaje...</Text>
			</View>
		);
	}

	if (error || !character) {
		return (
			<View style={global.container}>
				<Text style={details.errorText}>Personaje no encotrado</Text>
				<TouchableOpacity
					style={details.backButton}
					onPress={() => router.back()}
				>
					<Text style={details.backButtonText}>← Atras</Text>
				</TouchableOpacity>
			</View>
		);
	}

	return <DetailCard character={character} />;
}
