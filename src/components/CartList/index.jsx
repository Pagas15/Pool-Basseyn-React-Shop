import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { setAddOneCart, setRemoveOneCart, setRemoveFromCart } from '../../store/actions/cart';
import { setAddFavorites, setRemoveFavorites } from '../../store/actions/favorites';

import CartItem from './CartItem'

function CardList({array}) {
  const dispatch = useDispatch();

  const favorites = useSelector(({favorites}) => favorites.favorites);

  const cart = useSelector(({cart}) => cart.cart)

  const toggleFavorites = id => {
    favorites.includes(id) ? 
    dispatch(setRemoveFavorites(id)) : 
    dispatch(setAddFavorites(id))
  }

  const calcCount = (state, id) => {
    state ? 
    dispatch(setAddOneCart(id)) : 
    dispatch(setRemoveOneCart(id))
  }

  const removeItemCart = id => {
    dispatch(setRemoveFromCart(id))
  }

  return (<ul className="cartList podTp">
    {
      cart && Object.values(cart).map(item => {
        return <CartItem 
          key={item.id} 
          cart={item}
          favorite={favorites.includes(item.id)}
          toggleFavorite={toggleFavorites}
          numberInCart={cart[item.id]?.count}
          calcCount={calcCount}
          removeItemCart={removeItemCart}
        />
      })
    }
  </ul>)
}

export default CardList