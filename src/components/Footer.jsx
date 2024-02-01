import { FaPhone } from "react-icons/fa6";
const Footer = () => {

  const myStyle = { color: 'orange' };
    return (
      <div>
    <footer>
      <div className="footer1-wrapper">
        <div id="footer-logo-w-text" className="footer-section">
          <img src="./image/logo.jpg" alt="Restaurant Logo" className="footer-logo" />
          <p>Comida </p>
        </div>
        <div className="footer-section">
          <h1 className="heading">Hora abierto</h1>
          <p>Mon-Fri: 9 AM - 6 PM</p>
          <p>Saturday: 9 AM - 4 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="footer-section">
          <h1 className="heading">Contacto</h1>
          <p>Calle E. Leon Jimenez #6, 
             Junta de los Dos Caminos 
             
          </p>
          <p>
            Correo:
            <a>info@yoursite.com</a>
          </p>
          <p><FaPhone className="phone-icon"/>
            Telefono:
            <a>+1(809)724-9580</a>
          </p>
        </div>
        <div className="footer-section">
          
        </div>
      </div>
      <div className="footer2-wrapper">
        <div className="attribution">
          <p> copyright &copy; <span id="date">{new Date().getFullYear()}</span> Design by Raymond Del Rosario
          
          </p>
        </div>
       
      </div>
    </footer>
  
      </div>
    )
  }
  export default Footer