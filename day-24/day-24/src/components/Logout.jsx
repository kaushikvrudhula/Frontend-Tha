import { useContext } from "react";
import { AuthContext } from "./LoginContext";

const Logout = () => {
  const { state, dispatch } = useContext(AuthContext);
  return (
    <div className="logged-in">
      {state.isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <button
          onClick={() => {
            dispatch({ type: "setIsLoading", value: true });
            setTimeout(() => dispatch({ type: "logOut" }), 1000);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Logout;
