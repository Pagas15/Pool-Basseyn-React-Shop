import React from 'react'
import { Link } from "react-router-dom"

function Navigation({arrayNav}) {
  if(arrayNav){
    return (
      <ul className="navbar">
        {arrayNav.map((item, key) => <li key={key} className="navbar__item">
          <Link to={item[0]} className="navbar__link txt16x24">{item[1]}</Link>
        </li>)}
      </ul>
    )
  }
  return
}

export default Navigation