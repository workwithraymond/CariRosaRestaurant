import {useState} from 'react'
import Navbar from './Navbar';

const Navigation = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
  return (
    <div>
        <div className='navigation'>
            <ul>
                <li>inicio</li>
                <li>Nosotros</li>
                <li>Menu</li>
                <li>Contacto</li>
            </ul>
            <div className='hamburger' onClick={toggleHamburger}>
                <Navbar/>
            </div>
        </div>
    </div>
  )
}
export default Navigation