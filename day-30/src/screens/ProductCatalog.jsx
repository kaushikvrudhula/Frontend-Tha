import Card from "../components/ProductCard";
import { FetchProducts } from "../services/FetchData";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

const ProductCatalog = () => {
  const [products, setProducts] = useState(null);
/*  useEffect(() => {
    FetchProducts().then((data) => {
      setProducts(data);
    });
    
  }, []);
*/
  console.log(products);
  return (
    <div className="product-grid">
      {!products
        ? "Loading Products"
        : products.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              image={product.image}
              desc={product.description}
              price={product.price}
            />
          ))}
    </div>
  );
};

export default ProductCatalog;