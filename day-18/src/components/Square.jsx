function Square(props) {
  let obj = {
    width: "60px",
    height: "60px",
    backgroundColor: props.bgcolor,
  };
  return <div style={obj}></div>;
}

export default Square;
