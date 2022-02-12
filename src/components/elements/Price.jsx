import React from 'react'
import PropTypes from 'prop-types';

function Price({oldPrice, price, className}) {
  if(oldPrice){
    return (
      <p className={"price price--discount " + (className ? className : '')}>
        <span className="price__act">{`${price}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб</span>
        <span className="price__old">{`${oldPrice}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб</span>
      </p>
    )
  } else {
    return (
      <p className={"price " + (className ? className : '')}>{`${price}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб</p>
    )
  }
}

Price.protTypes = {
  oldPrice: PropTypes.number,
  price: PropTypes.number.isRequired
}

export default Price