import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAddToCart } from '../store/actions/cart';
import { setAddFavorites, setRemoveFavorites } from '../store/actions/favorites';

import ItemCart from './ItemCart';




function ItemsList({listItems}) {
  const dispatch = useDispatch();

  const favorites = useSelector(({favorites}) => favorites.favorites);
  const favoritesLoaded = useSelector(({favorites}) => favorites.isLoaded);

  const addToCart = obg => {
    dispatch(setAddToCart(obg))
  }
  const toggleFavorites = id => {
    favorites.includes(id) ? 
    dispatch(setRemoveFavorites(id)) : 
    dispatch(setAddFavorites(id))
  }

  return (
    <ul className="cardList podTp loader--ins">
      {
        listItems.map(item => {
          return (
            <li className="cardList__item card--wrap" key={item.id}>
              <ItemCart 
                item={item}
                favorite={favorites.includes(item.id)}
                toggleFavorite={toggleFavorites}
                onAddCart={addToCart}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

export default ItemsList