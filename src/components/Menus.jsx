import React from 'react'
import MainMenuSection from './MainMenuSection';

const Menus = ({items}) => {
  return (
    <div className='section-center'>

        {items.map((item) => {
            
            return(
          
               <MainMenuSection key={item.id} {...item}/> 
            )
        })}
        </div>
  )
}
export default Menus