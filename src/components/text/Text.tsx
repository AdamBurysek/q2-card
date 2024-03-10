import "./text.css";

const Text = () => (
  <div className="grid-item text-container">
    <p className="card-text">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo
    </p>
    <img className="repeat-grid" src="./repeat-grid.svg" />
    <button className="book-button">Book Now</button>
  </div>
);

export default Text;
