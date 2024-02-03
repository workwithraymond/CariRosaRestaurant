import React from 'react';
import Map from './Map';

const ContactPage = () => {

  const myStyle = { color: 'orange' };
    return (
      <div>
          <section id="section4">
      <section id="section4-inner-container">
        <section id="section4-top-half">
          <section id="section4-top-half-oneThirds-book-section">
            <span>
            Reserva
            </span>
            <h1 id="opening-times" className="heading">Horario de apertura</h1>
          </section>
          <section id="section4-top-half-twoThirds-phone-section">
            <div id="phone-container">
            <img src="./image/logo.jpg" alt="Restaurant Logo" className="nav-logo" />
            </div>
            <span id="phone-call">Llame Ahora</span>
            <h3 id="phone-number">347-730-1572</h3>
          </section>
  
          <section id="section4-top-half-threeThirds-times-section">
            <div name="left-times">
              <div>
                Lunes a Jueves
              </div>
              <div className="times-display">
                09:00 am - 22:00 pm
              </div>
            </div>
            <div name="right-times">
              <div>
                Vierne a Sabado
              </div>
              <div className="times-display">
                11:00 am - 20:00 pm
              </div>
              
            </div>
          </section>
  
        </section>
       <section>
        <Map/>
       </section>
  
  
      </section>
    </section>
  
      </div>
    )
  }
  export default ContactPage