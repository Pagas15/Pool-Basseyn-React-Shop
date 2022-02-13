import React, { useState } from 'react'

function BtnFavorites({className, statePos = false, addFavor, removeFavor}) {
  const [state, setState] = useState(statePos);
  console.log(statePos);
  const clickbl = () => {
    if(state){
      setState(false);
      addFavor && addFavor();
    } else {
      setState(true);
      removeFavor && removeFavor();
    }
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