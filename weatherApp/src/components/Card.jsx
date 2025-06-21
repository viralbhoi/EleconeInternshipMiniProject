import React from 'react'
import "./card.css"

const COLD = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
const HOT = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const RAIN = "https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHN0b3JtfGVufDB8fDB8fHww";



const Card = ({info}) => {
    let IMG_URL = info.humidity > 75 ? RAIN : info.temp > 25 ? HOT : COLD;

    
  return (
    <div className='Card'>
        <img src={IMG_URL} alt="Weather Image" />
        <h2>{info.city}</h2>
        <p>Temp : {info.temp}&deg;C</p>
        <p>Min. Temp : {info.minTemp}&deg;C</p>
        <p>Max. Temp : {info.maxTemp}&deg;C</p>
        <p>Feels like : {info.feelsLike}&deg;C</p>
        <p>Humidity : {info.humidity} % </p>
        <p>Weather can be described as {info.weather}.</p>
    </div>
  )
}

export default Card
