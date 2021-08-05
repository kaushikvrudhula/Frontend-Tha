const FetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const res = await data.json();
    return res;
  };
  
  const FetchProduct = async (pid) => {
    const data = await fetch(`https://fakestoreapi.com/products/${pid}`);
    const res = await data.json();
    return res;
  };
  
  export { FetchProducts, FetchProduct };