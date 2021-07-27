import { createContext, useReducer } from "react";

const AuthContext = createContext();
const defaultState = { auth: false, user: null, isLoading: false };
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "setIsLoading":
      return { ...state, isLoading: action.value };
    case "logIn":
      return { ...state, auth: true, user: action.user, isLoading: false };
    case "logOut":
      return { ...state, auth: false, user: null, isLoading: false };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, defaultState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
