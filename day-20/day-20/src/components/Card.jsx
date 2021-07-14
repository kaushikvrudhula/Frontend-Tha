const Card = ({ food, foods, setFoods, index }) => {
  return (
    <div className="container">
      <div className="card">
        <div
          className="remove"
          onClick={() => {
            const newFoods = foods.filter((el, i) => i !== index);
            setFoods(newFoods);
          }}
        >
          <img src="/images/lvl-4.png" alt="" width="50px" height="50px" />
        </div>
        <div className="img-container">
          <img src={food.url} alt="" />
        </div>
        <div className="title">{food.name}</div>
        <div className="calorie">Calories: {food.calories}</div>
      </div>
    </div>
  );
};

export default Card;
