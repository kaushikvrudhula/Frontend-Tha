const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={props.img} alt=" "></img>
        <div className="title">{props.title}</div>
      </div>
    </div>
  );
};

export default Card;
