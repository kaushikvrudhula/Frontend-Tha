import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/LoginContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">SPA? React for the Rescue</header>
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
