import React from 'react'

function Button({className, onClick, children}) {
  return (
    <button onClick={onClick} className={'btn ' + (className ? className : '')}>
      {children}
    </button>
  )
}

export default Button