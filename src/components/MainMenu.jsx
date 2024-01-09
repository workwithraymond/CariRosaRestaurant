import {useState} from 'react'
import menu from  '../data'
import MenuItems from './Menus'
import Categories from './Categories'

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const MainMenu = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

const filterItems = (category) => {
  if(categories === 'all') {
    setMenuItems(menu)
    return;
  }
  const newItems = menu.filter((item) => item.category === category);
  setMenuItems(newItems)
}
  
  return (
    <main>
      <section className='menu'>
    <Categories categories={categories} filterItems={filterItems}/>
    <MenuItems items={menuItems}/>
      </section>
    </main>
  )
}
export default MainMenu