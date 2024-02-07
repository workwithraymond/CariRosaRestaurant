import {slide as Menu } from 'react-burger-menu';

const NewMenu = () => {
  return (
    <div>
        <Menu isOpen={false} width={ '300px' } right>
  <a id="home" className="hamburger-menu" href="/">inicio</a>
  <a id="about" className="hamburger-menu" href="/about">Nosotros</a>
  <a id="contact" className="hamburger-menu" href="/contact">Menu</a>
  <a id="contact" className="hamburger-menu" href="/contact">Contacto</a>
</Menu>
    </div>
  )
}
export default NewMenu