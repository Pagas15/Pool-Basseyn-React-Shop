import React from 'react'

function BtnCircleIcon({className, onClick, state = false, children}) {
  const clickbl = () => {
    onClick()
  }

  const child = () => {
    switch (state) {
      case 'minus':
        return (<i className="icon-minus" />)
      case 'plus':
        return (<i className="icon-plus" />)
      default:
        return children;
    }
  }
  
  return (
    <button className={"btnCircleIcon " + (className ? className : '')} onClick={clickbl}>
      {child()}
    </button>
  )
}

export default BtnCircleIcon