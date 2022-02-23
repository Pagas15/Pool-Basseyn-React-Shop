import React from 'react'

function SpacePage({onClick, type, icon, text}) {
  
  const cnt = (() => {
    switch (type) {
      case 'favorites':
        return [<i class="icon-heart"></i>, (<>Ваш список<br/>избранного пуст</>)];
      case 'cart':
        return [<i className="icon-cart"></i>, (<>Ваша корзина<br/>пуста</>)];
      default:
        return [icon, text];
    }
  })()

  return (<div className="spacePage">
    <div className="spacePage__icon">
      {cnt[0]}
    </div>
    <p className="spacePage__txt txt16x24">
      {cnt[1]}
    </p>
  </div>)
}

export default SpacePage