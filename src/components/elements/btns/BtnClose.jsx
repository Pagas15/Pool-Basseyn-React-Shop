import React from 'react'

function BtnClose({className, onClick}) {
  return (
    <button className={"btnClose " + (className ? className : '')} onClick={onClick}>
      <i className="icon-close" />
    </button>
  )
}

export default BtnClose