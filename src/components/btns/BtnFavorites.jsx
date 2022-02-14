import React, { useState } from 'react'

function BtnFavorites({className, statePos = false, onClick}) {
  const clickbl = () => {
    onClick()
  }
  
  return (
    <button className={"btnFavorites " + (className ? className : '')} onClick={clickbl}>
      {
        statePos ? 
        <span className="btnFavorites__icon2"><i className="icon-heartGreen" /></span> :
        <span className="btnFavorites__icon1"><i className="icon-heart"/></span> 
      }
    </button>
  )
}

export default BtnFavorites