import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../actions";

const ToggleTheme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="toggle-theme">
      <button
        className={theme ? "btn btn-dark" : "btn btn-light"}
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        {theme ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default ToggleTheme;