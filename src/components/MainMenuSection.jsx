const MainMenuSection = ({title, category, price, img, desc}) => {
  return (
    <section id="section3">
    <section id= "section3-inner-container">
      <section id="section3-text-container">
      <span className="page-span">Orden linea Ahora</span>
        <h1 className="heading">Nuestra Cocina De Especialidad</h1>
        <nav id="section3-nav">
          <ul id="section3-ul">
          <li>{category}</li>
          </ul>
        </nav>
        <section id="section3-image-carousel" >
          <section id="food-carousel" >
            <div className="carousel-item">
            <img src="./images/carousel/contadina.jpg" alt="breakfast1" />
              <div className="item-info">
                <span className="price">${price}</span>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                </div>
                <span className="title">{title}</span>
                <button className="order-now">Order Now</button>
              </div>
            </div>
            <img src={img} alt={title} loading="lazy" />
          </section>
          <div className="slider-pagination">
            <div className="dot-container">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </section>
      </section>
    </section>
  </section>
  )
}
export default MainMenuSection