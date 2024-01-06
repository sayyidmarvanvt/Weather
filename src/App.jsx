import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [location, setlocation] = useState("");

  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13/${location}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0e178b3fa2mshf5c822241bd7092p16b865jsn89d89d354711",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const Api = async () => {
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    Api();
  }, [location]);

  console.log(data);
  return (
    <div className="app">
      <div className="container">
        <div className="search">
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={location}
              onChange={(event) => setlocation(event.target.value)}
              placeholder="Enter Location"
            />
          </form>
        </div>
{location ?  <>
        <div className="top">
        <div className="top-left">
        <div className="location">
          {data.location ? <p>{data.location.name}</p> : null}
        </div>
        <div className="temp">
          {data.current ? <h1>{data.current.temp_c}<span>&#8451;</span></h1> : null}
        </div>
        </div>
        <div className="top-right">
        <div className="description">
          {data.current && data.current.condition ? <p>{data.current.condition.text} </p> : null}
          {data.current && data.current.condition ? <img src={data.current.condition.icon} alt="weather icon" /> : null}
        </div>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          {data.current ? (
            <p className="bold">{data.current.feelslike_c}<span>&#8451;</span></p>
          ) : null}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          {data.current ? (
            <p className="bold">{data.current.humidity}%</p>
          ) : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
          {data.current ? (
            <p className="bold">{data.current.wind_kph} KPH</p>
          ) : null}
          <p>Wind Speed</p>
        </div>
      </div>
      </>:null}
       
        
          
      
      </div>
    </div>
  );
};

export default App;
