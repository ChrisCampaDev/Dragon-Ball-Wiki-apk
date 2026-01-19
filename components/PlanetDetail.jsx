import { View, Text, Image, ScrollView } from "react-native";
import { details } from "../styles/sheets";

export function PlanetDetail({ planet }) {
	if (!planet) {
		return (
			<View style={details.container}>
				<View style={details.centerContainer}>
					<Text style={details.errorText}>Planeta no encontrado</Text>
				</View>
			</View>
		);
	}

	const { name, image, description, isDestroyed, characters } = planet;

	return (
		<View style={details.container}>
			<ScrollView style={details.scrollContent}>
				{/* Header Image */}
				<View style={details.imageContainer}>
					<Image source={{ uri: image }} style={details.characterImage} />
				</View>

				{/* Planet Info */}
				<View style={details.mainInfo}>
					<Text style={details.planetName}>{name}</Text>
				</View>

				{/* Stats Cards */}
				<View style={details.statsContainer}>
					<View style={details.statCard}>
						<Text style={details.statLabel}>Estado</Text>
						<Text style={details.statValue}>
							{isDestroyed ? "Destruido" : "Activo"}
						</Text>
					</View>
					<View style={details.statCard}>
						<Text style={details.statLabel}>Habitantes</Text>
						<Text style={details.statValue}>{characters?.length || 0}</Text>
					</View>
				</View>

				{/* Description */}
				<View style={details.descriptionSection}>
					<Text style={details.sectionTitle}>Descripcion</Text>
					<View style={details.descriptionCard}>
						<Text style={details.descriptionText}>
							{description || "Sin descripcion."}
						</Text>
					</View>
				</View>

				{/* Characters */}
				{characters && characters.length > 0 && (
					<View style={details.infoSection}>
						<Text style={details.sectionTitle}>Habitantes Conocidos</Text>
						{characters.map((character, index) => (
							<View key={index} style={details.infoCard}>
								<Text style={details.infoLabel}>Personaje</Text>
								<Text style={details.infoValue}>{character.name}</Text>
							</View>
						))}
					</View>
				)}
			</ScrollView>
		</View>
	);
}
