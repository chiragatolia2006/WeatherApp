import "./InfoBox.css";

export default function InfoBox ({ info }) {
    return (
        <div className="InfoBox">
            <div className="weather-card">
                <div className="weather-content">
                    <div className="weather-main">
                        <div>
                            <h1>{info.city}</h1>
                            <p>{info.weather}</p>
                        </div>

                        <div className="temperature">
                            {info.temp}&deg;C
                        </div>
                    </div>

                    <p className="feels-like">
                        Feels like {info.feels_like}&deg;C
                    </p>

                    <div className="weather-details">
                        <div className="detail-card">
                            <span>💧</span>
                            <p>Humidity</p>
                            <h3>{info.humidity}%</h3>
                        </div>

                        <div className="detail-card">
                            <span>💨</span>
                            <p>Wind</p>
                            <h3>{info.wind || 0} km/h</h3>
                        </div>

                        <div className="detail-card">
                            <span>↑</span>
                            <p>High</p>
                            <h3>{info.tempMax}&deg;C</h3>
                        </div>

                        <div className="detail-card">
                            <span>↓</span>
                            <p>Low</p>
                            <h3>{info.tempMin}&deg;C</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}