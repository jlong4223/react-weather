import {useEffect, useState} from 'react'
import './App.css';
import Map from './components/Map/Map';
import {getCurrentLatLng} from './services/geolocation'

function App () {
  
 // then we'll initialize our state passing in some blank data our app eventually needs 
  const [appData, setAppData] = useState({
    lat: null, 
    lng: null
  })

  async function getAppData(){
    const {lat, lng} = await getCurrentLatLng()
    setAppData({lat,lng})
  }

  useEffect(()=>{
    getAppData()
  }, [])
  
  return (
    <div className='App'>
      <Map lat={appData.lat} lng={appData.lng} />
      <header className='App-header'>REACT WEATHER
      </header>
    </div>
  );
}

export default App;
