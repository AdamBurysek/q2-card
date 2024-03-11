import Top from "./components/top/Top";
import Title from "./components/title/Title";
import Text from "./components/text/Text";
import Slider from "./components/slider/Slider";

import "./App.css";

function App() {
  return (
    <section id="vietnam">
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
    </section>
  );
}

export default App;
