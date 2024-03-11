import { useState } from "react";

import Top from "./components/top/Top";
import Title from "./components/title/Title";
import Text from "./components/text/Text";
import Slider from "./components/slider/Slider";

import "./App.css";

function App() {
  const [showImage, setShowImage] = useState<boolean>(false);

  return (
    <section id="vietnam">
      {showImage ? (
        <img className="task-image" src="./Graficke-zadani.png" />
      ) : null}
      <div className="card">
        <Top />
        <Title />
        <Text />
        <Slider />
        <a className="more-trips">
          <img src="./more-trips-arrow.svg" />
          <p>More Short Trips</p>
        </a>
      </div>

      <button
        onClick={() => setShowImage(!showImage)}
        className="show-image-button"
      >
        Show task Image
      </button>
    </section>
  );
}

export default App;
