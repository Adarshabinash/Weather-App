import React from "react";

const Search = ({ search, setSearch, getWeatherData }) => {
  return (
    <div className=" flex shadow-xl">
      <input
        type="search"
        className="border border-black w-full p-2 text-2xl"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="p-3 bg-slate-600 text-white" onClick={getWeatherData}>
        Search
      </button>
    </div>
  );
};

export default Search;
