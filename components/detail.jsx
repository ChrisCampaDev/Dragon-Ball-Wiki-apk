import { View, Text, ScrollView, Image } from "react-native";
import { details } from "../styles/sheets";
import { Stack } from "expo-router";
export default function DetailCard({ character }) {
	return (
		<View style={details.container}>
			<Stack.Screen
				options={{
					headerTitle: character.name,
					headerTintColor: "orange",
				}}
			/>
			{/* Header Image */}
			<View style={details.imageContainer}>
				<Image
					source={{ uri: character.image }}
					style={details.characterImage}
				/>
			</View>

			{/* Character Info */}
			<ScrollView
				style={details.scrollContent}
				showsVerticalScrollIndicator={false}
			>
				<View style={details.mainInfo}>
					<Text style={details.characterName}>{character.name}</Text>
					<Text style={details.characterRace}>{character.race}</Text>
				</View>

				{/* Stats Cards */}
				<View style={details.statsContainer}>
					<View style={details.statCard}>
						<Text style={details.statLabel}>Ki:</Text>
						<Text style={details.statValue}>{character.ki}</Text>
					</View>
					<View style={details.statCard}>
						<Text style={details.statLabel}>Max Ki:</Text>
						<Text style={details.statValue}>{character.maxKi}</Text>
					</View>
				</View>

				{/* Information Cards */}
				<View style={details.infoSection}>
					<Text style={details.sectionTitle}>Informacion</Text>

					<View style={details.infoCard}>
						<Text style={details.infoLabel}>Afiliacion</Text>
						<Text style={details.infoValue}>{character.affiliation}</Text>
					</View>

					<View style={details.infoCard}>
						<Text style={details.infoLabel}>Genero</Text>
						<Text style={details.infoValue}>{character.gender}</Text>
					</View>

					<View style={details.infoCard}>
						<Text style={details.infoLabel}>Planeta natal:</Text>
						<Text style={details.infoValue}>{character.originPlanet.name}</Text>
					</View>
				</View>

				{/* Description */}
				<View style={details.descriptionSection}>
					<Text style={details.sectionTitle}>Descripcion</Text>
					<View style={details.descriptionCard}>
						<Text style={details.descriptionText}>
							{character.description || "Sin descripcion."}
						</Text>
					</View>
				</View>

				{/* Transformations */}
				{character.transformations && character.transformations.length > 0 && (
					<View style={details.transformationsSection}>
						<Text style={details.sectionTitle}>Transformaciones</Text>
						<ScrollView horizontal showsHorizontalScrollIndicator={false}>
							{character.transformations.map((transformation, index) => (
								<View key={index} style={details.transformationCard}>
									<Image
										source={{ uri: transformation.image }}
										style={details.transformationImage}
									/>
									<Text style={details.transformationName}>
										{transformation.name}
									</Text>
								</View>
							))}
						</ScrollView>
					</View>
				)}
			</ScrollView>
		</View>
	);
}
