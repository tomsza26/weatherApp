import React from 'react';
import CircleLoader from 'react-spinners/CircleLoader';

import { Weather } from '../ts/Types';
import './main.scss';

interface PropTypes {
  weather?: Weather;
  address?: string;
}

const index = (props: PropTypes) => {
  const { weather, address } = props;

  return (
    <>
      {weather ? (
        <div className="gridData">
          <div className="divG">Location: </div>
          <div className="divG">{address || weather.location.name}</div>
          <div className="divG">{weather.current.condition.text}</div>
          <div className="divG" id="iconImg">
            <img src={weather.current.condition.icon} alt="" />
          </div>
          <div className="divG">Temperature: </div>
          <div className="divG">{weather.current.temp_c}&#176;C</div>
          <div className="divG">Feels like: </div>
          <div className="divG">{weather.current.feelslike_c}&#176;C</div>

          <div className="divG">Humidity: </div>
          <div className="divG">{weather.current.humidity}%</div>

          <div className="divG">Pressure: </div>
          <div className="divG">{weather.current.pressure_mb} mb</div>
          <div className="divG">UV index: </div>
          <div className="divG">{weather.current.uv}</div>
          <div className="divG">Visibility: </div>
          <div className="divG">{weather.current.vis_km} km</div>

          <div className="divG">Wind degree: </div>
          <div className="divG">{weather.current.wind_degree}&#176;</div>
          <div className="divG">Wind speed: </div>
          <div className="divG">{weather.current.wind_kph} kph</div>
          <div className="divG">Wind gust: </div>
          <div className="divG">{weather.current.gust_kph} kPh</div>
          <div className="divG">Wind direction: </div>
          <div className="divG">{weather.current.wind_dir}</div>

          <div className="divG">Last updated: </div>
          <div className="divG">{weather.current.last_updated}</div>
        </div>
      ) : (
        <>
          <CircleLoader size={150} color="#cbce91ff" />
          <p id="loadingWeather">loading weather</p>
        </>
      )}
    </>
  );
};

export default index;
