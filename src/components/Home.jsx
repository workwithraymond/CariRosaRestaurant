import '../index.css';

const Home = () => {
  return (
    <div>

<section id="section1">
    <section className="inner-container">
      <section id="welcome-text-container">
        <h1 className="heading">
          Bienvenido<br/>RosiCar<br/>Restaurante
        </h1>
        <form id="first-form" action="">
          <div className="input-icon-wrapper">
            <i id="magnifying-glass-search-input" className="fa-solid fa-magnifying-glass"></i>
            <input id="first-form-input" type="text" placeholder="Search here" aria-label="input" />
          </div>
          <button id="location-btn">
            <span>ubicación</span>
            <i className="fa-solid fa-caret-down" style="color: #ffffff;"></i>
          </button>
        </form>
        <section id="welcome-likes">
          <section>
            <i className="fa-solid fa-bolt-lightning"></i>
            <span>252K</span>
          </section>
          <section>
            <i className="fa-brands fa-twitter"></i>
            <span>62k</span>
          </section>
          <section>
            <i className="fa-brands fa-instagram"></i>
            <span>55K</span>
          </section>
        </section>
      </section>
    </section>
  </section>
    </div>
  )
}
export default Home