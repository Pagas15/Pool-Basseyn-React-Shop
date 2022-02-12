import React from 'react'

function Phones({array}) {
  if(array){
    return (
      <div className="phones">
        {array.map((item, key) => <a key={key} href={item[0]} className="phones__link txt16x24">{item[1]}</a>)}
      </div>
    )
  }
  return
}

export default Phones