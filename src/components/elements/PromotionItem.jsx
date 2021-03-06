import React from 'react'

function PromotionItem({type, text, color}) {
  let textSi = text ? text : '';
  let colorBlock = '';

  switch (type) {
    case 'hit':
      textSi = 'ХИТ',
      colorBlock = ' presen--green'
      break;
    case 'promotion':
      textSi = 'Акция',
      colorBlock = ' presen--yellow'
      break;
    case 'novelty':
      textSi = 'Новинка',
      colorBlock = ' presen--green'
      break;
    case '2021':
      textSi = 'Модель 2021 года',
      colorBlock = ' presen--yellow'
      break;
    default:
      color && (colorBlock = ' presen--' + color);
      colorBlock = ''
      break;
  }
  return (
    <p className={"presen" + colorBlock}>{textSi}</p>
  )
}

export default PromotionItem