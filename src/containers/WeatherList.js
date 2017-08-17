import React, {Component} from "react";
import {connect} from "react-redux";
// import {selectBook} from "../actions/index.js";
// import {bindActionCreators} from "redux";
import Map from "../components/Map.js";

import Chart from "../components/Chart.js";

class WeatherList extends Component {
	renderCityRows(cityData) {
		const name = cityData.city.name;
		const tempSet = cityData.list.map(weather => weather.main.temp-273);
		const pressureSet = cityData.list.map(weather => weather.main.pressure);
		const humiditySet = cityData.list.map(weather => weather.main.humidity);
		const {lon, lat} = cityData.city.coord;

		return (
			<tr key={name}>
				<td>
					<Map lon={lon} lat={lat} />
				</td>
				<td>
					<Chart data={tempSet} color="orange" units="C" />
				</td>
				<td>
					<Chart data={pressureSet} color="black" units="hPA" />
				</td>
				<td>
					<Chart data={humiditySet} color="green" units="%" />
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderCityRows)}
				</tbody>
			</table>
		);
	}
};

// function mapStateToProps(state) {
// 	// we are using "weather" as they key because we assigned the WeatherReducer to the key "weather" in src > reducers > index.js (change filename... too many index.js's...)
// 	return {
// 		weather: state.weather
// 	};
// }
// is the same as...
// note: {weather} is expanded to const weather = state.weather;
function mapStateToProps({weather}) {
	// we are using "weather" as they key because we assigned the WeatherReducer to the key "weather" in src > reducers > index.js (change filename... too many index.js's...)
	// note: mapStateToProps() *must return an object* (cannot return weather; without curly brackets)
	return {weather};
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({selectBook: selectBook}, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);

// connect the WeatherList Container to the Redux WeatherReducer state to give WeatherList access to this.props.weather
export default connect(mapStateToProps)(WeatherList);