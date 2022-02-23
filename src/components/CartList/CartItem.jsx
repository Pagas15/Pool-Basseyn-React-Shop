import React from 'react'
import BtnFavorites from '../elements/btns/BtnFavorites';
import BtnClose from '../elements/btns/BtnClose';
import Counter from '../elements/Counter';

function CartItem({cart, favorite, toggleFavorite, numberInCart, calcCount, removeItemCart}) {

  
  const onToggleFavorite = () => toggleFavorite(cart.id);

  const calcInCount = (state) => {
    calcCount(state, cart.id)
  }

  const onRemoveItemCart = () => {
    removeItemCart(cart.id)
  }


  return (<li className="cartList__item cart">
    <a href="#" className="cart__info cart__bd">
      <div className="cart__img"><img src={cart.img} alt="" /></div>
      <div className="cart__txt">
        <p className="price">{cart.price} руб.</p>
        <p className="txt14x22">{cart.title}</p>
      </div>
    </a>
    <BtnClose className="cart__remove" onClick={onRemoveItemCart}/>
    <Counter startCount={numberInCart} calcCount={calcInCount} className="cart__counter cart__bd"/>
    <div className="cart__bd">
      <BtnFavorites className="btnCircleIcon" statePos={favorite} onClick={onToggleFavorite} />
    </div>
  </li>)
}

export default CartItem