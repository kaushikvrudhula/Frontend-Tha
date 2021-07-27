import { useState, useContext } from "react";
import { AuthContext } from "./LoginContext";

const Login = () => {
  const [firsName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(AuthContext);
  return (
    <div className="login-page">
      {state.isLoading ? (
        <h3>User login in progress...</h3>
      ) : (
        <form
          className="form-wrapper"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "setIsLoading", value: true });
            setTimeout(
              () =>
                dispatch({
                  type: "logIn",
                  user: [firsName, lastName],
                }),
              1000
            );
          }}
        >
          <div className="input-wrapper">
            <div className="input-field">
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                id="firstname"
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <label htmlFor="pswd">Password:</label>
              <input
                type="password"
                id="pswd"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
