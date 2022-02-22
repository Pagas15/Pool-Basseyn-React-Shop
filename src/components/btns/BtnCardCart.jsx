import React from 'react'

function BtnCardCart({className, onClick}) {
  return (
    <button className={"btnCart " + (className ? className : '')} onClick={onClick}><i className="icon-cart" /></button>
  )
}

export default BtnCardCart