import { useState } from "react";
import menu from '../data';
import Menus from './Menu';
import Categories from './Categories';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const NewMenu = () => {
    const [menuItems, setMenuItems] = useState(menu);
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
        if(category === 'all') {
            setMenuItems(menu) 
            return;
        }

        const newItems = menu.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

  return (
    <main>
        <section className="menus">
        <Categories categories={categories} filterItems={filterItems} />  
        <Menus items={menuItems}  />
        </section>
    </main>
  )
}
export default NewMenu
