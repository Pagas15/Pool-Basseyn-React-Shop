import React from 'react'

function SpacePage({icon, text}) {
  return (
    <div class="spacePage">
      <div class="spacePage__icon">
        {/* <i class="icon-cart"></i> */}
        {icon}
      </div>
      <p class="spacePage__txt txt16x24">
        {/* Ваша корзина<br>пуста */}
        {text}
      </p>
    </div>
  )
}

export default SpacePage