import React from 'react'

function StandType({title, titleNum}) {
  return (
    <div className="header__item header__inf">
      <div className="wrapper wrapper--tp">
        <TitleRow>
          <h4 className="topRow__title title">{title}</h4>
          <p className="numCl">2</p>
        </TitleRow>
        <div className="podTp btnWraper">
          <a href="#" className="btn btnGr">Быстрый заказ</a>
          <a href="#" className="btn btnGy">Перейти в корзину</a>
        </div>
      </div>
    </div>
  )
}



export default StandType