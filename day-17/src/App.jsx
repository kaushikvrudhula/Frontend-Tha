import "./style.css";
import React from "react";

import Card from "./components/card";

function App() {
  return (
    <div class="wrap">
      <div className="card-container">
        <Card
          src="/img/lvl-1.jpg"
          title="Brownie"
          alt="Wallpaper-1"
          p="you have consumed 56 cals today"
        />
        <Card
          src="/img/lvl-2.jpg"
          title="Pizza"
          alt="Wallpaper-2"
          p="you have consumed 69 cals today"
        />
        <Card
          src="/img/lvl-3.jpg"
          title="Burger"
          p="you have consumed 560 cals today"
        />
        <Card
          src="/img/lvl-4.jpg"
          title="Coke"
          p="you have consumed 650 cals today"
        />
      </div>
    </div>
  );
}

export default App;
