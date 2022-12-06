import React, { useEffect, useState } from 'react';
import './css/style.css';

const Weatherchecker = () => {
  const[city,setCity] = useState(null);
  const[search,setSearch] =useState("dhenkanal");
  const[weather,setWeather] =useState(null);
  useEffect(()=>{
    const fetchApi = async () =>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=aa5724e8c1819aebced82f62450c1aa9`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      setWeather(resJson.weather);
      
    }
    fetchApi();
  },[search])
  return (
    <>
    <div className='box'>
      <div className='inputData'>
      <h1>WEATHER CHECKER</h1>
        <input type="search" className='inputField' onChange={(event)=>{setSearch(event.target.value)}}/>
      </div>

    {!city ? (
    <p className='error-msg'>no data found</p>): (
    <div>
    <div className='info'>
    <h2 className='location'>
    <i className="fa-solid fa-cloud"></i><br/>
    <i className="fa-solid fa-street-view"><span className='place'>{search}</span></i>
    </h2>
    <h1 className='temp'>{city.temp}°Cel</h1>
    <h3 className='min-temp-max'>Min -{city.temp_min}°Cel | Max -{city.temp_max}°Cel</h3>
    <h4 className="humidity">humidity - {city.humidity}%</h4>
    <h5 className='weather'>weather - {weather[0].main}</h5>
  </div>
  <div className='waveone'></div>
    <div className='wavetwo'></div>
    <div className='wavethree'></div>
  </div>
    )}
    
    </div>
    </>
  )
}

export default Weatherchecker;