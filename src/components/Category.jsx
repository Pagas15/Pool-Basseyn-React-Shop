import React, { useState } from 'react'
import PropTypes from 'prop-types';

function Category({onClickCategory, items, activeCategory}) {
  
  return (
    <div className="topRow topRow--actual">
      {items && items.map((item) => (
        <button key={item[0]} className={'topRow__item title ' + (activeCategory === item[0] ? 'active' : '')} onClick={()=>{onClickCategory(item[0])}}>{item[1]}</button>
      ))}
    </div>
  )
}

Category.propType = {
  items: PropTypes.array,
  onClickCategory: PropTypes.func,
}


export default Category