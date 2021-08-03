import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
const WeatherCard = () => {
  const placeData = useSelector((state) => state.placeData);
  const theme = useSelector((state) => state.theme);
  console.log(placeData);
  return (
    <>
      {!placeData.current ? (
        <div
          style={{ marginTop: "2rem", fontWeight: "500", fontSize: "1.5rem" }}
        >
          Enter a valid place
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card
            className={theme ? "shadow p-3 mb-5 dark" : "shadow p-3 mb-5"}
            style={{
              width: "24rem",
              marginTop: "3rem",
              borderRadius: "1rem",
            }}
          >
            <Card.Body>
              <Card.Img
                src={placeData.current.condition.icon}
                style={{ width: "5rem", height: "5rem" }}
              />
              <Card.Title style={{ fontWeight: "600", fontSize: "2.5rem" }}>
                {placeData.current.temp_c}°C
              </Card.Title>
              <Card.Text>{placeData.current.condition.text}</Card.Text>
              <Card.Text style={{ fontWeight: "600" }}>
                {placeData.location.name}
              </Card.Text>
            </Card.Body>
          </Card>
          <div
            className={
              theme
                ? "shadow p-3 mb-5 stat-container dark"
                : "shadow p-3 mb-5 stat-container"
            }
          >
            <div>
              <div className="stat">Wind Speed</div>
              <div className="stat-value">{placeData.current.wind_kph}</div>
              kmph
            </div>
            <div>
              <div className="stat">Humidity</div>
              <div className="stat-value">{placeData.current.humidity}</div>%
            </div>
            <div>
              <div className="stat">Precipitation</div>
              <div className="stat-value">{placeData.current.precip_mm}</div>
              mm
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherCard;