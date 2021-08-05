import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductCatalog from "./screens/ProductCatalog";
import ProductDetails from "./screens/ProductDetails";
import ProductFavorites from "./screens/ProductFavorites";
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Cart />
      <Switch>
        <Route exact path="/">
          <ProductCatalog />
        </Route>
        <Route exact path="/:id">
          <ProductDetails />
        </Route>
        <Route exact path="/fav">
          <ProductFavorites />
        </Route>
      </Switch>
    </Router>
  </div>
);
}

export default App;
