import axios from "axios";
import React, { useEffect, useState } from "react";
import Result from "./Result";
import Search from "./Search";

const Weather_App = () => {
  //These following data I will send by props to save some time
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  const getWeatherData = () => {
    //This function I will pass in my button to handle my request on click.
    if (search !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=80731ff19e0a12f0b9ebcd21580b83e9`
        )
        .then((res) => setWeather(res.data)) //we have to pass it in the weather state
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="max-w=[1240px] mx-auto mt-2 p-3 ">
      <Search
        search={search}
        setSearch={setSearch}
        getWeatherData={getWeatherData}
      />
      <Result weather={weather} />
    </div>
  );
};

export default Weather_App;

