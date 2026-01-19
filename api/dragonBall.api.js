const pjs = "https://dragonball-api.com/api/characters";
const planets = "https://dragonball-api.com/api/planets";

export const getData = async () => {
	try {
		const response = await fetch(`${pjs}?limit=58`);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		const result = await response.json();
		return result.items;
	} catch (error) {
		console.error(error.message);
	}
};

export const getDatabyID = async id => {
	try {
		const response = await fetch(`${pjs}/${id}`);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error.message);
	}
};

export const getPlanets = async () => {
	try {
		const response = await fetch(`${planets}?limit=20`);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		const result = await response.json();
		return result.items;
	} catch (error) {
		console.error(error.message);
	}
};

export const getPlanetbyID = async id => {
	try {
		const response = await fetch(`${planets}/${id}`);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error.message);
	}
};
