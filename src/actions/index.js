import axios from "axios";

const API_KEY = "ff09b5238e042b302884ea26fec70033";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER_DATA = "FETCH_WEATHER_DATA";

export function fetchWeatherData(city) {
	const url = `${ROOT_URL}&q=${city}&type=like`;
	const request = axios.get(url);
	
	// console.log("Request made!", request);

	return {
		type: FETCH_WEATHER_DATA,
		payload: request
	};
}