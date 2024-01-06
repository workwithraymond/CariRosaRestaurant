
import PageLinks from './PageLinks';



const Navbar = () => {
    return (
    
        <nav className="navbar">
        <div className="hamburger-menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <PageLinks parentClass='nav-links' itemClass='nav-link'/>
        <ul id="nav-links" className="nav-links">
          
          <li id="cart-icon" className="fa-icon">
            <a href="/" title="shopping-cart-link" >
              <i className="fa-solid fa-cart-shopping" />
            </a>
            <div className="item-quantity">0</div>
          </li>
          <li className="fa-icon"><a href="/" title="search-link" aria-label="search"><i className="fa-solid fa-magnifying-glass"></i></a></li>
        </ul>
      </nav>
      )
};
export default Navbar;