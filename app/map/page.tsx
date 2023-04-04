'use client'
import React, { useState, useEffect } from 'react';

function CurrentCity() {
  const [city, setCity] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=caf67823c91f69ef3db39d64abc2b956&units=metric`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const cityName = data.name;
          setCity(cityName);
        })
        .catch((error) => console.log(error));
    });
  }, []);

  return (
    <div>
      <p>Current City: {city}</p>
    </div>
  );
}

export default CurrentCity;