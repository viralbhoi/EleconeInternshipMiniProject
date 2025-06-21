import React from "react";
import Card from "./Card";
import "./infobox.css"


const InfoBox = ({weatherInfo}) => {

    return (
        <div className="InfoBox">
            <Card info = {weatherInfo}/>
        </div>
    );
};

export default InfoBox;
