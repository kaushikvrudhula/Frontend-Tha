import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navb from "./components/Navbar";
import Cart from "./components/Cart";
import ProductCatalog from "./screens/ProductCatalog";
import "bootstrap/dist/css/bootstrap.min.css"; 
import ProductDetails from "./screens/ProductDetails";
import ProductFavorites from "./screens/ProductFavorites";
import ProductCard from "./components/ProductCard";
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navb />
      <Cart /> 
      <ProductCard />
      <Switch>
        <Route exact path="/" component={ProductCatalog}/>
        <Route exact path="/fav">
          <ProductFavorites />
        </Route>
        <Route exact path="/:id">
          <ProductDetails />
        </Route>
        
      </Switch>
    </Router>
  </div>
);
}

export default App;
