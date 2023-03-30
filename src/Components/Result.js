import React from "react";

const Result = ({ weather }) => {
  return (
    <div className=" bg-red-300 shadow-xl mt-5 p-4">
      {weather.length !== 0 ? (
        <>
          <h2 className="text-4xl text-center">{weather.name}</h2>
          <div className=" text-2xl flex justify-around mt-2">
            <div>Min-temp: {weather.main.temp_min}</div>
            <div>Max-temp: {weather.main.temp_max}</div>
          </div>
          <div className="text-2xl flex justify-around mt-8">
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
            <div>{weather.weather[0].main}</div>
          </div>
        </>   
      ) : (
        <>
          <h1 className="text-center p-3 text-3xl">Please enter a city name</h1>
        </>
      )}
    </div>
  );
};

export default Result;
