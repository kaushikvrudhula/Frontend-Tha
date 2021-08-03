import {useState } from "react";
import "./index.css";

function App() {
  const [place, setPlace] = useState(" ");
  const [placeData, setPlaceData] = useState({});
  const updatePlaceData = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=f846e1f1eeda4a65a3783501210108&q= ${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaceData(data);
      });
  };

  return (
      <div className="container">

          <div className="Wrapper-input">
          <input
            className="input"
            type="text"
            value={place}
            onChange={(e) => {
              setPlace(e.target.value);
            }}
          />
          <button onClick={updatePlaceData} className="submit">
            Submit
          </button>
          </div>
          <div className="card">
            {placeData.location ? (
              <div>
                <img src={placeData.current.condition.icon} alt="" />
                <div>Temp:{placeData.current.temp_c}</div>
                <div>Location:{placeData.location.name}</div>
                <div>Humidity:{placeData.current.humidity}</div>
                <div>Wind:{placeData.current.wind_kph}</div>
              </div>
            ) : (
              <h2 className="not">Place not found</h2>
            )}
          </div>
      </div>
  );
}

export default App;
