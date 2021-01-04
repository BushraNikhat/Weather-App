import React, { useState, useEffect } from "react";
import Axios from "axios";


const TempCard = (props) => {

  
  const [city, setCity] = useState("Delhi");

  // country and temperature will get set ,whenever there is a good response to the api call.
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("");

// object destructuring is used below
  const { minute, hour, date, month, period, dayToday } = props.now;


  const apiKey = "8a6fbc78a296de53aaa6482cd19f3276";
  // Api will get called each time when user types something in input tag or when the page get refreshed.
  useEffect(() => {
    async function getCity() {
      await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
        .then((response) => {
          
          setTemperature(response.data.main);
          setCountry(response.data.sys)
          
     
     
        })
        .catch((err) => {
         
        
          setTemperature(null);
  
        });  
    }
    getCity();
  },[city]);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center view-area">
        <div className="card weather-box shadow ">
          <div className="card-body">

            <div className="form-group city-name-div d-flex justify-content-center ">
              <input
                type="search"
                placeholder="Enter City"
                className="form-control city-name"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
            {/* ternary operator is used below,it will show "no data found" when there is a bad response and it will show the details when there is good response  */}
            {!temperature ? (
              <p className="text-center font-weight-bold display-5">No data found</p>
            ) : (
              <div>
              
                <div className="weather-detail">
                  <div className="place-detail d-flex flex-column justify-content-center align-items-center">
                    <h1 className="head" id="place">
                      <i className="fas fa-thermometer-quarter"></i>
                      <span>
                        {city},{country.country}
                      </span>
                    </h1>
                    <p className="para" id="time-detail">
                      {dayToday} | {month} {date} | {hour} :{minute} {period}
                    </p>
                  </div>
                  <div className="temperature d-flex flex-column justify-content-center align-items-center">
                    <h1 className="head" id="temp">
                      {temperature.temp} &deg;C
                    </h1>
                    <p className="para" id="min-max">
                      Min-{temperature.temp_min}&deg;C | Max-{temperature.temp_max}&deg;C
                    </p>
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TempCard;
