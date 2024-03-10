import { useState } from "react";

import Slider from "./components/slider/Slider";
import Text from "./components/text/Text";
import Title from "./components/title/Title";
import Top from "./components/top/Top";

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
