import { useState } from 'react'
import axios from 'axios'
import { TransparentNav } from './Nav';

export default function WeatherApp() {
  const [Location,setLocation] = useState("")
  const [data, setData] = useState([])

  const Api_Key = import.meta.env.VITE_API_Key;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=${Api_Key}&units=metric`
  // console.log(url)
  const searchLocation = (event) => {
    if (event.key === 'Enter' || event.type === 'click'){
     axios.get(url).then(response => {setData(response.data)})
    }    
    // setLocation('')
  }

  return (
    <>
        <TransparentNav />
      <div className='h-screen w-auto bg-[url(/src/assets/landscape.webp)] bg-center bg-cover'>
        <div id="search" className='flex flex-row justify-center p-4'>
          <input type="search" value={Location} onKeyDown={searchLocation} onChange={event => setLocation(event.target.value)} placeholder='Enter Location'
          className='bg-white text-gray-500 py-2' />
          <button type="submit" className='p-2 bg-blue-700 font-bold hover:bg-blue-800' onClick={searchLocation}>Search</button>
        </div>
        <div id="container" className='m-auto h-96 top-1/10 p-12 text-black relative flex flex-col justify-between'>
          <div id="top">
            <div id="location">
              {data.name? <p className='font-bold text-2xl'>{data.name} </p> : null}
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
  )
}

