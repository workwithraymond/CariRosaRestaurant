import WhatsApp from './WhatsApp';
import PageLinks from './PageLinks';


const Navbar = () => {

    return (
    
        <nav className="navbar">
          <img src="./image/logo.jpg" alt="Restaurant Logo" className="nav-logo" />
 
        <div className="hamburger-menu">
       
          <div className= 'burger burger1'></div>
          <div className='burger burger2'></div>
          <div className='burger burger3'></div>
          <div className='burger burger4'></div>
        </div>
        
        <PageLinks parentClass='nav-links' itemClass='nav-link'/>
        <ul id="nav-links" className="nav-links">
       
          <WhatsApp />      
          
        </ul>
      </nav>
      )

};
export default Navbar;