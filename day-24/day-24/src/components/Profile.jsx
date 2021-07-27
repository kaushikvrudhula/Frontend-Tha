import { useContext } from "react";
import { AuthContext } from "./LoginContext";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const { state } = useContext(AuthContext);
  const history = useHistory();
  if (!state.auth) {
    setTimeout(() => {
      history.push("/");
    }, 1000);
    return <h3>User not logged in. Redirecting...</h3>;
  }

  return (
    <h2>
      You have logged in as {state.user[0]} {state.user[1]}
    </h2>
  );
};

export default Profile;
