import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp () {
    const [weatherInfo , setWeatherInfo] = useState({
        city:"Alwar",
        feels_like: 32.97,
        humidity: 19,
        temp: 35.03,
        tempMax: 35.03,
        tempMin: 35.03,
        weather: "clear sky"
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div className="weather-app">
            <div className="weather-header">
                <div>
                    <h2>Weather App</h2>
                    <p>Weather at a glance</p>
                </div>
            </div>

            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}