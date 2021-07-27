import { useContext } from "react";
import { AuthContext } from "./LoginContext";
import Login from "./Login";
import Logout from "./Logout";

const Home = () => {
  const { state } = useContext(AuthContext);

  return (
    <div className="home-wrapper">
      {state.auth ? <h3>You have logged in</h3> : null}
      {state.auth ? <Logout /> : <Login />}
    </div>
  );
};

export default Home;
