import React from 'react';

const MainMenu = () => {


  return (
    <div>
        <section id="section3">
    <section id= "section3-inner-container">
      <section id="section3-text-container">
      <span className="page-span">Orden linea Ahora</span>
        <h1 className="heading">Nuestra Cocina De Especialidad</h1>
        <nav id="section3-nav">
          <ul id="section3-ul">
            <li >Desayuno</li>
            <li className="active">
              <a href='#lunch'>Lunch</a></li>
            <li>Dinner</li>
            <li>Breakfast</li>
            <li>Dessert</li>
          </ul>
        </nav>
        <section id="section3-image-carousel" >
          <section id="food-carousel" >
            <div className="carousel-item">
              <img src="./images/carousel/contadina.jpg" alt="breakfast1" />
              <div className="item-info">
                <span className="price">$14.99</span>
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                </div>
                <span className="title">Contadina</span>
                <button className="order-now">Order Now</button>
              </div>
            </div>
            <img src="./images/breakfast1-min.jpg" alt="breakfast9" loading="lazy" />
            <img src="./images/PanCake-breakfast2-min.jpg" alt="breakfast10" loading="lazy" />
            <img src="./images/FruitSalad-breakfast3-min.jpg" alt="breakfast11" loading="lazy" />
            <img src="./images/Bacon-breakfast4-min.jpg" alt="breakfast5" loading="lazy" />
            <img src="./images/LayerPancake-breakfast5-min.jpg" alt="breakfast6" loading="lazy" />
            <img src="./images/carousel/image-7-min.png" alt="breakfast7" loading="lazy" />
            <img src="./images/carousel/image-8-min.png" alt="breakfast8" loading="lazy" />
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

    </div>
  )
}
export default MainMenu;