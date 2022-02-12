import React from 'react'

function SocialLinks({links}) {
  return (
    <ul className="socialList">
      {links && links.map(item => <li className="socialList__item" key={item.name}><a href={item.link} className="socialList__link"><img src={item.img} alt={item.name} /></a></li>)}
    </ul>
  )
}

export default SocialLinks