const MainMenuSection = ({title, category, price, img, desc}) => {
  return (
 <article className="menu-item">
  <img src={img} alt={title} className="img" />
  <div className="item-info">
  <header>
          <h3>{title}</h3>
          <span className="item-price">${price}</span>
        </header>
      </div>
      <p className="item-text">{desc}</p>
      
      

 
 </article>

    
  )
}
export default MainMenuSection