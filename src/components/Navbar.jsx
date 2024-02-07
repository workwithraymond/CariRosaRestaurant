import WhatsApp from './WhatsApp';
import PageLinks from './PageLinks';
import NewMenu from './NewMenu';





const Navbar = () => {
    return (
    
        <nav className="navbar">
          <img src="./image/logo.jpg" alt="Restaurant Logo" className="nav-logo" />
 
        
        <NewMenu/>
          <div></div>
          <div></div>
          <div></div>
       
        
        <PageLinks parentClass='nav-links' itemClass='nav-link'/>
        <ul id="nav-links" className="nav-links">
        
          <WhatsApp />      
          
        </ul>
        
      </nav>
      )

};
export default Navbar;