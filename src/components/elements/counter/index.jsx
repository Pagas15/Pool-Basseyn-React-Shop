import React, { useState } from 'react'
import BtnCircleIcon from '../btns/BtnCircleIcon'

function Counter({className, startCount = 1, calcCount}) {

  const onPlusCLick = () => {
    calcCount(true)
  }
  const onMinusCLick = () => {
    calcCount(false)
  }

  return (
    <div className={"counter " + (className ? className : '')}>
      <BtnCircleIcon state="minus" onClick={onMinusCLick} className="btnCircleIcon--minus btnCircleIcon--red" />
      <p className="counter__pieces">{startCount} шт.</p>
      <BtnCircleIcon state="plus" onClick={onPlusCLick} />
    </div>
  )
}

export default Counter