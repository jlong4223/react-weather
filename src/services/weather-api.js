
export function getCurWeatherByLatLng(lat, lng) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=5b3c5a41e420b342a7d2e498f5e3fd82`).then(res => res.json());
  }

