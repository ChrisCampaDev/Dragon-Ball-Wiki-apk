import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
	container: {
		backgroundColor: "#f1eeeeff",
		marginBottom: 16,
		marginTop: 10,
		marginHorizontal: 20,
		borderRadius: 20,
		padding: 0,
		shadowColor: "#f97",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 10,
		borderWidth: 1,
		borderColor: "#1113",
	},
	content: {
		flexDirection: "row",
		padding: 16,
		backgroundColor: "transparent",
	},
	imagen: {
		width: 120,
		height: 150,
		borderRadius: 12,
		resizeMode: "contain",
	},
	textContainer: {
		flex: 1,
		justifyContent: "center",
		paddingLeft: 16,
	},
	text: {
		color: "#2c3e50",
		fontSize: 18,
		fontWeight: "600",
		marginBottom: 4,
	},
	subtext: {
		color: "#7f8c8d",
		fontSize: 14,
		marginBottom: 2,
	},
	description: {
		padding: 16,
		paddingTop: 0,
		color: "#5a6c7d",
		fontSize: 14,
		lineHeight: 20,
		textAlign: "left",
		borderTopWidth: 1,
		borderTopColor: "#f0f0f0",
		marginTop: 8,
		paddingTop: 16,
	},
});

export const global = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export const details = StyleSheet.create({
	container: {
		flex: 1,
	},

	centerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	imageContainer: {
		height: 350,
		resizeMode: "contain",
		borderRadius: 16,
	},

	characterImage: {
		width: "400",
		height: "500",
		resizeMode: "contain",
	},
	headerContent: {
		position: "absolute",
		top: 50,
		left: 20,
		right: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	scrollContent: {
		flex: 1,
		backgroundColor: "#fff",
	},
	mainInfo: {
		alignItems: "center",
		paddingTop: 30,
		paddingBottom: 20,
	},
	planetName: {
		fontSize: 32,
		fontWeight: "bold",
		color: "#ffffffff",
		backgroundColor: "#000",
		borderRadius: 50,
		paddingHorizontal: 50,
		paddingVertical: 10,
		textAlign: "center",
		marginBottom: 8,
	},
	characterName: {
		fontSize: 32,
		fontWeight: "bold",
		color: "#000",
		textAlign: "center",
		marginBottom: 8,
	},
	characterRace: {
		fontSize: 18,
		color: "#f89719",
		textAlign: "center",
		textTransform: "uppercase",
		letterSpacing: 2,
	},
	statsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		paddingHorizontal: 20,
		marginBottom: 30,
	},
	statCard: {
		backgroundColor: "#000",
		padding: 20,
		borderRadius: 16,
		alignItems: "center",
		minWidth: 140,
		borderWidth: 1,
		borderColor: "#333",
	},
	statLabel: {
		fontSize: 12,
		color: "#fff",
		textTransform: "uppercase",
		letterSpacing: 1,
		marginBottom: 8,
	},
	statValue: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#f89719",
		textAlign: "center",
	},
	infoSection: {
		paddingHorizontal: 20,
		marginBottom: 30,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
		marginBottom: 16,
	},
	infoCard: {
		backgroundColor: "#fff",
		padding: 16,
		borderRadius: 12,
		marginBottom: 12,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "#333",
	},
	infoLabel: {
		fontSize: 14,
		color: "#000",
		textTransform: "uppercase",
		letterSpacing: 1,
	},
	infoValue: {
		fontSize: 16,
		color: "#000",
		fontWeight: "600",
	},
	descriptionSection: {
		paddingHorizontal: 20,
		marginBottom: 30,
	},
	descriptionCard: {
		backgroundColor: "#ff",
		padding: 20,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: "#000",
	},
	descriptionText: {
		fontSize: 15,
		color: "#000",
		lineHeight: 24,
	},
	transformationsSection: {
		paddingHorizontal: 20,
		paddingBottom: 40,
	},
	transformationCard: {
		alignItems: "center",
		marginRight: 16,
		backgroundColor: "#000",
		borderRadius: 12,
		padding: 12,
		borderWidth: 1,
		borderColor: "#333",
	},
	transformationImage: {
		width: 80,
		height: 80,
		borderRadius: 8,
		resizeMode: "contain",
		marginBottom: 8,
	},
	transformationName: {
		fontSize: 12,
		color: "#fff",
		textAlign: "center",
		maxWidth: 80,
	},
	loadingText: {
		color: "#fff",
		marginTop: 16,
		fontSize: 16,
	},
	errorText: {
		color: "#ff4444",
		fontSize: 18,
		marginBottom: 20,
	},
	backButtonText: {
		fontSize: 18,
		color: "#f89719",
		fontWeight: "bold",
	},
});
