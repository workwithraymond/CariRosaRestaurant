import React from 'react';
import { menu } from '../data'
import Menus from './Menus'



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
        <Menus items={menu}/>
        
        </section>
      </section>
    </section>
 

    </div>
  )
}
export default MainMenu;