import { updatePlace, updatePlaceData } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const Form = () => {
  const place = useSelector((state) => state.place);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        marginTop: "2rem",
        width: "20rem",
        height: "2rem",
      }}
    >
      <input
        className={theme ? "dark" : ""}
        type="text"
        value={place}
        style={{ padding: "0.3rem" }}
        onChange={(e) => {
          dispatch(updatePlace(e.target.value));
        }}
      />
      <Button
        variant="primary"
        style={{
          margin: "-0.2rem 0 0 1rem",
          padding: "0.4rem",
          backgroundColor: "#0B5ED7",
          color: "white",
          outline: "0",
        }}
        onClick={() => {
          dispatch(updatePlaceData(place));
        }}
      >
        Find
      </Button>
    </div>
  );
};

export default Form;