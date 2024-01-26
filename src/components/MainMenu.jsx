import React from 'react';
import {useState} from 'react';
import menu from '../data';
import Menu from './Menus';
import Categories from './Categories';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];


const MainMenu = () => {
    const [menuItems, setMenuItems] = useState(menu);
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
      if(category === 'all'){
        setMenuItems(menu)
        return;
      }
      const newItems = menu.filter((item) => item.category === category)
      setMenuItems(newItems)
    }


  return (
    <main className='center-container'>
  <Categories categories={categories} filterItems={filterItems}/>
      <span className="page-span">Orden linea Ahora</span>
   <h1 className="heading">Nuestra Cocina De Especialidad</h1>
  <Menu items ={menuItems} />

    </main>
  )
}
export default MainMenu;