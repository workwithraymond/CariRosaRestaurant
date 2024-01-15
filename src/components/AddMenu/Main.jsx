import {useState} from 'react';
import menu from '../../data';
import Menu from './Menu';
import Title from './NewTitle';
import Categories from './Categories';
import '../../index.css'

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const Main = () => {
    const [menuItems, setMenuItems] = useState(menu);
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
        if(category === 'all') {
            setMenuItems(menu)
            return
        }
        const newItems = menu.filter((item) => item.category === category);
        setMenuItems(newItems)
    }
  return (
    <main>
        <section className='menu'>
        <Title text={'our menu'}/>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems}/>
        </section>
    </main>
  )
}
export default Main