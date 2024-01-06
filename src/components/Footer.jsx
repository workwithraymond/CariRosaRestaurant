const Footer = () => {

  const myStyle = { color: 'orange' };
    return (
      <div>
    <footer>
      <div className="footer1-wrapper">
        <div id="footer-logo-w-text" className="footer-section">
          <img src="./assets/images/Divi-Cuisine-Logo.png" alt="Restaurant Logo" className="footer-logo" />
          <p>Just like a perfectly baked pastry, we created Cuisine with special love and it shows</p>
        </div>
        <div className="footer-section">
          <h1 className="heading">Open Hours</h1>
          <p>Mon-Fri: 9 AM - 6 PM</p>
          <p>Saturday: 9 AM - 4 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="footer-section">
          <h1 className="heading">Contact Us</h1>
          <p>Calle E. Leon Jimenez #6, 
             Junta de los Dos Caminos 
             
          </p>
          <p>
            Correo:
            <a>info@yoursite.com</a>
          </p>
          <p>
            Telefono:
            <a>+1(809)724-9580</a>
          </p>
        </div>
        <div className="footer-section">
          <h1 className="heading">Subscribe Newsletter</h1>
          <form id="second-form" action="">
            <div id="second-form-input-wrapper">
              <input id="second-form-input" type="text" placeholder="Email Address" aria-label="input" />
              <i id="send-search" className="fa-solid fa-paper-plane" style={myStyle}></i>
            </div>
          </form>
        </div>
      </div>
      <div className="footer2-wrapper">
        <div className="attribution">
          <p> copyright &copy; <span id="date">{new Date().getFullYear()}</span> Design by Raymond Del Rosario
          
          </p>
        </div>
        <div>
          <ul className="social-media">
            <li className="sm-active" id="facebook-icon"><a href="SOCIAL_MEDIA_LINK"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li id="twitter-icon"><a href="SOCIAL_MEDIA_LINK"><i className="fa-brands fa-twitter"></i></a></li>
            <li id="linkedin-icon"><a href="SOCIAL_MEDIA_LINK"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li id="instagram-icon"><a href="SOCIAL_MEDIA_LINK"><i className="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  
      </div>
    )
  }
  export default Footer