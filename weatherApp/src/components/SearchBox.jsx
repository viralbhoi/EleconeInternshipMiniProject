import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./searchbox.css"


const SearchBox = ({setweatherInfo}) => {
    const [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "429dd047c109a3fb37c9ff9d7b5b2a34";

    let getWeatherInfo = async () => {
        let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonRes = await res.json();
        // console.log(jsonRes);

        let result = {
            city : city,
            temp : jsonRes.main.temp,
            maxTemp : jsonRes.main.temp_max,
            minTemp : jsonRes.main.temp_min,
            feelsLike : jsonRes.main.feels_like,
            humidity : jsonRes.main.humidity,
            weather : jsonRes.weather[0].description,
        }

        setweatherInfo(result);
    }

    
    let handelSubmit = (e) => {
        e.preventDefault();

        console.log(city);
        getWeatherInfo();
        setCity("");
    }
    return (
        <div className="SearchBox">
            <h3>Search Box</h3>
            <div>
            <form onSubmit={handelSubmit}>
                <TextField
                    id="standard-basic"
                    label="City Name"
                    variant="standard"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    startIcon={<SearchOutlinedIcon />}
                >
                    {" "}
                    Search{" "}
                </Button>
            </form>
            </div>
        </div>
    );
};

export default SearchBox;
