import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import clear from "./images/clear.png";
import cloud from "./images/cloud.png";
import rain from "./images/rain.png";
import snow from "./images/snow.png";
import drizzle from "./images/drizzle.png";
import wind from "./images/wind.png";
import humidity from "./images/humidity.png";
import beret from "./images/Beret.png";
import bold from "./images/Bold.png";
import hat from "./images/Hat.png";
import jacket from "./images/jacket.png";
import tshirt from "./images/T-shirt.png";
import coat from "./images/Coat.png";
import Shorts from "./images/Shorts.png";
import trousers from "./images/Trousers.png";
import snackers from "./images/snackers.png";
import boat from "./images/Boat.png";
import slipper from "./images/Slipper.png";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Istanbul");
  const [weatherfoto, setWeatherFoto] = useState(null);
  const [isClotesVisible, setIsClotesVisible] = useState(false);
  const [clotesForHead, setclotesForHead] = useState(beret);
  const [clotesForHeadExplain, setclotesForHeadExplain] = useState("");
  const [clotesForBody, setclotesForBody] = useState(jacket);
  const [clotesForBodyExplain, setclotesForBodyExplain] = useState("");
  const [clotesForLeg, setclotesForLeg] = useState(trousers);
  const [clotesForLegExplain, setclotesForLegExplain] = useState("");
  const [clotesForFoot, setclotesForFoot] = useState(boat);
  const [clotesForFootExplain, setclotesForFootExplain] = useState("");

  const setweatherdata = () => {
    fetchWeatherData();
  };

  const displayChange = () => {
    setIsClotesVisible(!isClotesVisible);
    if (
      document.getElementById("icon-button").className ===
      "bi bi-chevron-double-right"
    ) {
      document.getElementById("icon-button").className =
        "bi bi-chevron-double-left";
    } else {
      document.getElementById("icon-button").className =
        "bi bi-chevron-double-right";
    }
  };

  const fetchWeatherData = async () => {
    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    try {
      const response = await axios.get(
        `API KEY`
      );
      setWeatherData(response.data);
      const wheatherinfo = { clear, cloud, drizzle, rain, snow };
      const weatherCondition = response.data.weather[0].main.toLowerCase();
      const weathertemperature = weatherData.main.temp;

      switch (weatherCondition) {
        case "clear":
          setWeatherFoto(wheatherinfo.clear);
          if (weathertemperature >= 20) {
            setclotesForHead(hat);
            setclotesForHeadExplain("hat is a true choice");
            setclotesForBody(tshirt);
            setclotesForBodyExplain("T-shirt is a true clotes this weather");
            setclotesForLeg(Shorts);
            setclotesForLegExplain("Short allows your legs to breathe");
            setclotesForFoot(slipper);
            setclotesForFootExplain("Slippers allow your feet to breathe");
          }
          if (weathertemperature < 20 && weathertemperature > 5) {
            setclotesForHead(bold);
            setclotesForHeadExplain("not a true choise any wear");
            setclotesForBody(jacket);
            setclotesForBodyExplain("jacket is a true clotes this weather");
            setclotesForLeg(trousers);
            setclotesForLegExplain("trousers is support your leg for cold");
            setclotesForFoot(snackers);
            setclotesForFootExplain("snackers is support your foot");
          }
          if (weathertemperature <= 5) {
            setclotesForHead(beret);
            setclotesForHeadExplain("beret is a true choice this weather");
            setclotesForBody(coat);
            setclotesForBodyExplain("Coat is a true clotes this weather");
            setclotesForLeg(trousers);
            setclotesForLegExplain("trousers is support your leg for cold");
            setclotesForFoot(boat);
            setclotesForFootExplain("boots are great for the winter months");
          }
          break;
        case "clouds":
          setWeatherFoto(wheatherinfo.cloud);
          if (weathertemperature >= 20) {
            setclotesForHead(hat);
            setclotesForHeadExplain("hat is a true choice");
            setclotesForBody(tshirt);
            setclotesForBodyExplain("T-shirt is a true clotes this weather");
            setclotesForLeg(Shorts);
            setclotesForLegExplain("Short allows your legs to breathe");
            setclotesForFoot(slipper);
            setclotesForFootExplain("Slippers allow your feet to breathe");
          }
          if (weathertemperature < 20 && weathertemperature > 5) {
            setclotesForHead(bold);
            setclotesForHeadExplain("not a true choise any wear");
            setclotesForBody(jacket);
            setclotesForBodyExplain("jacket is a true clotes this weather");
            setclotesForLeg(trousers);
            setclotesForLegExplain("trousers is support your leg for cold");
            setclotesForFoot(snackers);
            setclotesForFootExplain("snackers is support your foot");
          }
          if (weathertemperature <= 5) {
            setclotesForHead(beret);
            setclotesForHeadExplain("beret is a true choice this weather");
            setclotesForBody(coat);
            setclotesForBodyExplain("Coat is a true clotes this weather");
            setclotesForLeg(trousers);
            setclotesForLegExplain("trousers is support your leg for cold");
            setclotesForFoot(boat);
            setclotesForFootExplain("boots are great for the winter months");
          }
          break;
        case "drizzle":
          setWeatherFoto(wheatherinfo.drizzle);
          if (weathertemperature >= 20) {
            setclotesForHead(hat);
            setclotesForHeadExplain("hat is a true choice");
            setclotesForBody(tshirt);
            setclotesForBodyExplain(
              "T-shirt is a true clotes this weather.can you take a umbrella"
            );
            setclotesForLeg(Shorts);
            setclotesForLegExplain("Short allows your legs to breathe");
            setclotesForFoot(slipper);
            setclotesForFootExplain("Slippers allow your feet to breathe");
          }
          if (weathertemperature < 20 && weathertemperature > 5) {
            setclotesForHead(bold);
            setclotesForHeadExplain("not a true choise any wear");
            setclotesForBody(jacket);
            setclotesForBodyExplain(
              "jacket is a true clotes this weather.can you take a umbrella"
            );
            setclotesForLeg(trousers);
            setclotesForLegExplain("trousers is support your leg for cold");
            setclotesForFoot(snackers);
            setclotesForFootExplain("snackers is support your foot");
          }
          if (weathertemperature <= 5) {
            setclotesForHead(beret);
            setclotesForHeadExplain("beret is a true choice this weather");
            setclotesForBody(coat);
            setclotesForBodyExplain(
              "Coat is a true clotes this weather.can you take a umbrella"
            );
            setclotesForLeg(trousers);
            setclotesForLegExplain("trousers is support your leg for cold");
            setclotesForFoot(boat);
            setclotesForFootExplain("boots are great for the winter months");
          }
          break;
        case "rain":
          setWeatherFoto(wheatherinfo.rain);
          if (weathertemperature >= 20) {
            setclotesForHead(hat);
            setclotesForHeadExplain("hat is a true choice");
            setclotesForBody(tshirt);
            setclotesForBodyExplain(
              "T-shirt is a true clotes this weather.can you take a umbrella"
            );
            setclotesForLeg(Shorts);
            setclotesForLegExplain("Short allows your legs to breathe");
            setclotesForFoot(slipper);
            setclotesForFootExplain("Slippers allow your feet to breathe");
          }
          if (weathertemperature < 20 && weathertemperature > 5) {
            setclotesForHead(bold);
            setclotesForHeadExplain("not a true choise any wear");
            setclotesForBody(jacket);
            setclotesForBodyExplain(
              "jacket is a true clotes this weather.can you take a umbrella"
            );
            setclotesForLeg(trousers);
            setclotesForLegExplain("trousers is support your leg for cold");
            setclotesForFoot(snackers);
            setclotesForFootExplain("snackers is support your foot");
          }
          if (weathertemperature <= 5) {
            setclotesForHead(beret);
            setclotesForHeadExplain("beret is a true choice this weather");
            setclotesForBody(coat);
            setclotesForBodyExplain(
              "Coat is a true clotes this weather.can you take a umbrella"
            );
            setclotesForLeg(trousers);
            setclotesForLegExplain("trousers is support your leg for cold");
            setclotesForFoot(boat);
            setclotesForFootExplain("boots are great for the winter months");
          }
          break;
        case "snow":
          setWeatherFoto(wheatherinfo.snow);
          if (weathertemperature >= 20) {
            setclotesForHead(hat);
            setclotesForHeadExplain("hat is a true choice");
            setclotesForBody(tshirt);
            setclotesForBodyExplain(
              "T-shirt is a true clotes this weather.can you take a umbrella"
            );
            setclotesForLeg(Shorts);
            setclotesForLegExplain("Short allows your legs to breathe");
            setclotesForFoot(slipper);
            setclotesForFootExplain("Slippers allow your feet to breathe");
          }
          if (weathertemperature < 20 && weathertemperature >5) {
            setclotesForHead(beret);
            setclotesForHeadExplain("beret is a true choice this weather");
            setclotesForBody(jacket);
            setclotesForBodyExplain(
              "jacket is a true clotes this weather.can you take a umbrella"
            );
            setclotesForLeg(trousers);
            setclotesForLegExplain("trousers is support your leg for cold");
            setclotesForFoot(boat);
            setclotesForFootExplain("Boots are great for the winter months.the snow is very harder");
          }
          if (weathertemperature <= 5) {
            setclotesForHead(beret);
            setclotesForHeadExplain("beret is a true choice this weather");
            setclotesForBody(coat);
            setclotesForBodyExplain(
              "Coat is a true clotes this weather.can you take a umbrella"
            );
            setclotesForLeg(trousers);
            setclotesForLegExplain("trousers is support your leg for cold");
            setclotesForFoot(boat);
            setclotesForFootExplain(
              "Boots are great for the winter months.the snow is very harder"
            );
          }
          break;
        default:
          setWeatherFoto(null);
          setclotesForHead(null);
          setclotesForHeadExplain(null);
          setclotesForBody(null);
          setclotesForBodyExplain(null);
          setclotesForLeg(null);
          setclotesForLegExplain(null);
          setclotesForFoot(null);
          setclotesForFootExplain(null);
          break;
      }
    } catch (error) {
      alert("City not found. Please enter a valid city name.");
      console.error("Error fetching the weather data", error);
    }
  };

  return (
    <div id="inclusive">
      <div id="weather-page">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={setweatherdata}>Get Weather</button>

        {weatherData ? (
          <div style={{ display: "flex" }}>
            <div>
              <div
                id="info"
                style={{
                  backgroundImage: weatherfoto ? `url(${weatherfoto})` : "none",
                  backgroundSize: "cover",
                  height: "350px",
                }}
              >
                <div>
                  <h1 style={{ fontSize: 50 }}>{weatherData.main.temp} °C</h1>
                </div>
              </div>
              <div id="footer">
                <div>
                  <img
                    src={wind}
                    alt="wind icon"
                    style={{ height: 30, marginTop: 25 }}
                  />
                </div>
                <div>
                  <p style={{ textAlign: "center", fontSize: 18 }}>
                    {weatherData.wind.speed} km/h
                    <br /> Wind speed
                  </p>
                </div>
                <div>
                  <img
                    src={humidity}
                    alt="wind icon"
                    style={{ height: 30, marginTop: 25, marginLeft: 140 }}
                  />
                </div>
                <div>
                  <p style={{ textAlign: "center", fontSize: 18 }}>
                    {weatherData.main.humidity} % <br /> Humidity
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>No data available. Please enter a city and click "Get Weather".</p>
        )}
      </div>

      <div id="clotesForWeather" className={isClotesVisible ? "show" : ""}>
        <div id="head-part">
          <div className="header-clotes">
            Head <p style={{ fontSize: 14 }}>{clotesForHeadExplain}</p>
          </div>
          <img
            className="img-clotes"
            src={clotesForHead}
            style={{ width: 80, marginLeft: 30 }}
            alt="had"
          ></img>
        </div>
        <div id="body-part">
          <div className="header-clotes">
            Body<br></br>
            <p style={{ fontSize: 14 }}>{clotesForBodyExplain}</p>
          </div>
          <img className="img-clotes" src={clotesForBody} alt="body"></img>
        </div>
        <div id="leg-part">
          <div className="header-clotes">
            Leg <br></br>
            <p style={{ fontSize: 14 }}>{clotesForLegExplain}</p>
          </div>
          <img className="img-clotes" src={clotesForLeg} alt="leg"></img>
        </div>
        <div id="foot-part">
          <div className="header-clotes">
            Foot <br></br>
            <p style={{ fontSize: 14 }}>{clotesForFootExplain}</p>
          </div>
          <img
            className="img-clotes"
            src={clotesForFoot}
            style={{ width: 80, marginLeft: 30 }}
            alt="foot"
          ></img>
        </div>
      </div>

      <button id="for-clotes" onClick={displayChange}>
        <i id="icon-button" className="bi bi-chevron-double-right"></i> <br />
        <br /> C L O T E S
      </button>
    </div>
  );
}

export default App;
