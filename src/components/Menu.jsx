import Menus from './Menus';

const Menu = ({items}) => {
  return (
    <div className = 'section-center'>
        {items.map((item) => {
            return(
                <Menus key={item.id} {...item} />
            )
        })}
    </div>
  )
}
export default Menu