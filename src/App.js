import {useEffect, useState} from 'react'
import './App.css';
import Map from './components/Map/Map';


function App () {
  
 // then we'll initialize our state passing in some blank data our app eventually needs 
  const [appData, setAppData] = useState({
    lat: null, 
    lng: null
  })

  useEffect(()=>{
    console.log('useEffect in the house')
  })
  
  return (
    <div className='App'>
      <Map />
      <header className='App-header'>REACT WEATHER
       <button onClick={()=> setAppData({
         lat: 32.8203525,
         lng: -97.011731
       })}>Set Weather Data</button>
      </header>
    </div>
  );
}

export default App;
