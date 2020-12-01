import {useEffect, useState} from 'react'
import './App.css';
import Map from './components/Map/Map';
import {getCurrentLatLng} from './services/geolocation'
import {getCurWeatherByLatLng} from './services/weather-api'

function App () {
  
 // then we'll initialize our state passing in some blank data our app eventually needs 
  const [appData, setAppData] = useState({
    lat: null, 
    lng: null, 
    temp: null, 
    icon: ''
  })

  async function getAppData(){
    const {lat, lng} = await getCurrentLatLng()
    const weatherData = await getCurWeatherByLatLng(lat, lng)
    console.log(Math.round(weatherData.main.temp));
    setAppData({
      lat,
      lng,
      temp: Math.round(weatherData.main.temp),
      icon: weatherData.weather[0].icon 
    })
  }

  useEffect(()=>{
    getAppData()
  }, [])
  
  return (
    <div className='App'>
      <Map lat={appData.lat} lng={appData.lng} />
      <header className='App-header'>
    {
    appData.temp && 
      <div>{appData.temp}&deg;</div>
    }
    REACT WEATHER
    {appData.icon && 
      <img
        src={`https://openweathermap.org/img/w/${appData.icon}.png`}
        alt='Current Conditions'
      />
    }
  </header>
    </div>
  );
}

export default App;
