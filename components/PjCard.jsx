import { Image, Text, View, Animated, Pressable } from "react-native";
import { Link } from "expo-router";
import { useEffect, useRef } from "react";
import { cardStyles } from "../styles/sheets";

export function PjCard({ data, planet }) {
	const { id, name, image, ki, race, description, affiliation, isDestroyed } =
		data;

	return (
		<Link href={!planet ? `/${data.id}` : `planets/${id}`} asChild>
			<Pressable>
				<View key={id} style={cardStyles.container}>
					<View style={cardStyles.content}>
						<Image source={{ uri: image }} style={cardStyles.imagen} />
						<View style={cardStyles.textContainer}>
							<Text style={cardStyles.text}>Nombre: {name}</Text>
							<Text style={cardStyles.subtext}>
								{!planet ? "Raza: " : "Destruido: "}
								{!planet ? race : isDestroyed ? "Si" : "No"}
							</Text>
							{!planet && (
								<>
									<Text style={cardStyles.subtext}>Ki: {ki}</Text>
									<Text style={cardStyles.subtext}>
										Pertenece a: {affiliation}
									</Text>
								</>
							)}
						</View>
					</View>
					<Text style={cardStyles.description}>
						{description.slice(0, 140)}...
					</Text>
				</View>
			</Pressable>
		</Link>
	);
}

export function AnimatedCard({ data, index, planets }) {
	const opacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 500,
			delay: index * 100,
			useNativeDriver: true,
		}).start();
	}, [opacity, index]);

	return (
		<Animated.View style={{ opacity }}>
			<PjCard data={data} planet={planets} />
		</Animated.View>
	);
}
