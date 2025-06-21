import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import SearchBox from "./components/SearchBox";
import InfoBox from "./components/InfoBox";

function App() {
    const [weatherInfo, setweatherInfo] = useState({
        city : "Delhi",
        temp: 37.16,
        maxTemp: 37.16,
        minTemp: 37.16,
        feelsLike: 38.96,
        humidity: 33,
        weather: "few clouds",
    });

    return (
        <>
            {/* <Button variant='contained'> click me </Button> */}
            <SearchBox setweatherInfo={setweatherInfo}/>
            <InfoBox weatherInfo={weatherInfo}/>
        </>
    );
}

export default App;
