import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ItemCart from './ItemCart';




function ItemsList({listItems}) {
  const dispatch = useDispatch();

  const favorites = useSelector(({favorites}) => favorites.favorites);
  const favoritesLoaded = useSelector(({favorites}) => favorites.isLoaded);
  return (
    <ul className="cardList podTp loader--ins">
      {
        listItems.map(item => {
          return (
            <li className="cardList__item card--wrap" key={item.id}>
              <ItemCart 
                itemId={item.id}
                promotion={item.promotion}
                favorite={favorites.includes(item.id)}
                img={item.imgTitle}
                oldPrice={item.Oldprice}
                price={item.price}
                title={item.title}
                availability={item.number > 0}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

export default ItemsList