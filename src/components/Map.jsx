import "../App.css";

function Map() {
  return (
    <div className="App">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.8745349548053!2d-70.68333611509398!3d19.460975492926092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1c588a40359c3%3A0xffc01d4b7cde4be9!2sC.%20E.%20Le%C3%B3n%20Jimenez%2C%2051000%20Santiago%20de%20los%20Caballeros%2C%20Dominican%20Republic!5e0!3m2!1sen!2sus!4v1706319950306!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
