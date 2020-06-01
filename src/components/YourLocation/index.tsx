/* eslint-disable react/jsx-one-expression-per-line */
// eslint-disable-next-line object-curly-newline
import React, { useEffect, useState, FormEvent, useRef } from 'react';

import './main.scss';
import { Errored, Weather } from '../shared/ts/Types';
import TableTemplate from '../shared/tableLoc/index';

const googleAPIKey = 'AIzaSyC7Xr0UOgmTeV2mzgUyLEO-dDlpLe8KHGA';
const weatherAPIKey = '044797d37dbd4c9193b132152202805';

const index = () => {
  const inputRef = useRef<HTMLInputElement>();

  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const [address, setAddress] = useState<string>();
  const [weather, setWeather] = useState<Weather>();
  const [erroro, setErroro] = useState<string>();

  const showPosition = async (position: {
    coords: {
      latitude: number;
      longitude: number;
    };
  }) => {
    const latV = position.coords.latitude;
    const lngV = position.coords.longitude;
    setLat(latV);
    setLng(lngV);

    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${latV},${lngV}&lang=eng&condition:icon`,
      );

      if (!response.ok) {
        setErroro('There was a problem with fetching weather data.');
      }

      const responseBody: Weather = await response.json();
      setAddress(responseBody.location.name);
      setWeather(responseBody);
      setErroro('');
    } catch (err) {
      setErroro('Limit of queries in this month reached, try next month :)');
    }
  };

  const showError = (error: Errored) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setErroro('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        setErroro('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        setErroro('The request to get user location timed out.');
        break;
      case error.UNKNOWN_ERROR:
        setErroro('An unknown error occurred.');
        break;
      default:
    }
  };

  const formSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const inputVal = inputRef.current?.value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ł/gi, 'l');
    if (inputVal) {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${inputVal}&lang=eng&condition:icon`,
      );

      if (response.status === 400) {
        setErroro('Invalid inputs passed, please check your spelling.');
        return;
      }

      if (!response.ok) {
        setErroro('There was a problem.');
        return;
      }

      const responseBody: Weather = await response.json();

      setLat(responseBody.location.lat);
      setLng(responseBody.location.lon);
      setWeather(responseBody);
      setAddress(responseBody.location.name);
      setErroro('');
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
  }, []);

  return (
    <div className="weather">
      <h1>Weather in your area</h1>
      <div className="badLocation">
        <h2>Bad location?</h2>
        <form onSubmit={formSubmit}>
          <input
            type="text"
            id="badLocation"
            ref={inputRef}
            placeholder="Enter name of Your city"
            maxLength={70}
            minLength={2}
          />
          <button type="submit">FIND</button>
        </form>
        <p id="errorMessage">{erroro}</p>
      </div>
      <img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=7&size=300x300&sensor=false&markers=color:red%7C${lat},${lng}&key=${googleAPIKey}`}
        alt=""
      />
      <TableTemplate weather={weather} address={address} />
    </div>
  );
};

export default index;
