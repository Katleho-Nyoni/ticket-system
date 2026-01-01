import { useState } from 'react'
import axios from 'axios'
import { TransparentNav } from './Nav';
import { useEffect } from 'react';

export default function WeatherApp() {
  const [location,setLocation] = useState("")
  const [error, setError] = useState("")
  const [data, setData] = useState({})
  const [buttonExpand, setButtonExpand] = useState(false)

  // console.log(url)
  const searchLocation = async (query) => {
      try {

        const URL = query
        ? `http://localhost:3000/API/weather?location=${query}`
        : `http://localhost:3000/API/weather`;

        const response = await axios.get(URL);
        setData(response.data);
        setError("");
        console.error(error.message);
      } catch (error) {
        setError("Error fetching weather data");
        console.error(error.message);
        }
  }

  useEffect(() => {
    searchLocation();
    // alert("The default location is based on your IP address. ");
  },[]);
  

  return (
    <>
      <div className='h-screen w-auto bg-[url(/src/assets/landscape.webp)] bg-center bg-cover'>
        <div id="search" className='flex flex-row justify-center p-4 '>
          {!buttonExpand ? (
            <button className='rounded-full border border-green-600 bg-green-600 py-2 px-4 font-bold text-white cursor-pointer'
            onClick={() => {setButtonExpand(true)}}>Search Location</button>
          ) : (
              <>
                <input type="search" value={location} onChange={e => setLocation(e.target.value)} placeholder='Enter Location'
                className='bg-white text-gray-500 py-2 ' />
                <button type="submit" className='p-2 bg-blue-700 font-bold hover:bg-blue-800' 
                onClick={() => searchLocation(location)}>Search</button>
              </>
          )}
          
        </div>
        {error && <p className='text-red-600'>{error}</p> }
        <div id="container" className='m-auto h-96 top-1/10 p-12 text-black relative flex flex-col justify-between'>
          <div id="top">
            <div id="location">
              {data.name? <p className='font-bold text-6xl'>{data.name} </p> : <p className='font-bold text-5xl'>Welcome</p> }
            </div>
            <div id="temp">
              {data.main? <h1  className='font-extrabold text-3xl'>{data.main.temp}°C</h1> : null}
            </div>
            <div id="description">
              {data.weather ? <p className='font-bold text-xl'>{data.weather[0].description}</p> : null}
            </div>
            <div id="button" className='flex flex-row justify-between p-8 border border-gray-400 rounded-xl mt-50 bg-gray-400/40'>
              <div id="feels">
                {data.main ? <p className='font-bold text-xl'>{data.main.feels_like}°C</p> : null}
                <p className='font-bold text-sl'>Feels like</p>
              </div>
              <div id="humidity">
                {data.main ? <p className='font-bold text-xl'>{data.main.humidity}%</p> : null}
                <p className='font-bold text-sl'>Humidity</p>
              </div>
              <div id="wind">
                {data.wind ? <p className='font-bold text-xl'>{data.wind.speed} MPH</p> : null}
                <p className='font-bold text-sl'>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

