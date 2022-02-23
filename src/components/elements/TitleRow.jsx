import React from 'react'

function TitleRow({children, className}) {
  return (
    <div className={"topRow " + (className ? className : '')}>{children}</div>
  )
}

export default TitleRow