const Card = (props) => {
  return (
    <div className="card">
      <img className="im1" src={props.src} alt={props.alt}></img>
      <div className="title">{props.title}</div>
      <p className="Paragraph">{props.p}</p>
    </div>
  );
};

export default Card;
