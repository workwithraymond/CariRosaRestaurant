import WhatsApp from './WhatsApp';
import PageLinks from './PageLinks';





const Navbar = () => {
    return (
    
        <nav className="navbar">
          <img src="./image/logo.jpg" alt="Restaurant Logo" className="nav-logo" />
 
        <div className="hamburger-menu">
       
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        <PageLinks parentClass='nav-links' itemClass='nav-link'/>
        <ul id="nav-links" className="nav-links">
       
          <WhatsApp />      
          
        </ul>
      </nav>
      )

};
export default Navbar;