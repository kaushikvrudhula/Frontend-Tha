import meme from "./meme-img.jpg";
const Meme = () => {
  return (
    <div class="meme-container">
      <div className="meme">
        <img className="meme-img" alt="meme" src={meme} />
      </div>
    </div>
  );
};

export default Meme;
