import React from 'react'

function Availability({availability, className}) {
  if(availability){
    return (
      <div className={"availability " + (className ? className : '')}>
        <div className="availability__icon">
          <i className="icon-check"></i>
        </div>
        <p className="availability__txt">Есть в наличии</p>
      </div>
    )
  } else {
    return ( 
      <div className={"availability availability--none " + (className ? className : '')}>
        <div className="availability__icon">
          <i className="icon-none"></i>
        </div>
        <p className="availability__txt">Нет в наличии</p>
      </div>
    )
  }
}

export default Availability