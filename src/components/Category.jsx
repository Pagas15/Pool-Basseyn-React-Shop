import React, { useState } from 'react'
import PropTypes from 'prop-types';

function Category({onClickCategory, items, activeCategory}) {
  const [active, setActive] = useState(activeCategory);

  const activeCateg = (index) => {
    setActive(index);
    onClickCategory && onClickCategory(index);
  }
  return (
    <div className="topRow topRow--actual">
      {items && items.map((name, index) => (
        <button key={index} className={'topRow__item title ' + (active === index ? 'active' : '')} onClick={()=>{activeCateg(index)}}>{name}</button>
      ))}
    </div>
  )
}

Category.propType = {
  items: PropTypes.array,
  onClickCategory: PropTypes.func,
  activeCategory: PropTypes.number,
}

Category.defaultProps = {
  activeCategory: 0,
}

export default Category