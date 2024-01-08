import Menus 

const NewMenu = ({items}) => {
  return (
    <div className='section-center'>
        {items.map((menuItems) => {
            <MenuItems key={menuItems.id} {...menuItems}/>
        })}

    </div>
  )
}
export default NewMenu