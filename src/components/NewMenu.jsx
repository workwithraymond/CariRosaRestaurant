import Menus from './Menus'

const NewMenu = ({items}) => {
  return (
    <div className='section-center'>
        {items.map((menuItems) => {
            <Menus key={menuItems.id} {...menuItems}/>
        })}

    </div>
  )
}
export default NewMenu