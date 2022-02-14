import React from 'react'
import PropTypes from 'prop-types';
import Button from '../Button';
import PromotionItem from '../PromotionItem';
import BtnFavorites from '../btns/BtnFavorites';
import Price from '../elements/Price';
import Availability from '../elements/Availability';

function ItemCart({item, onAddCart, favorite, toggleFavorite}) {
  
  const promotionBlock = () => {
    if(item.promotion){
      return (<div className="card__presentation">
        {item.promotion.map(item => <PromotionItem type={item} key={item}/>)}
      </div>)
    }
  }

  const availability = item.number > 0;
  const addToCart = () => {
    onAddCart({
      id: item.id,
      img: item.imgTitle,
      title: item.title,
      count: 1
    })
  }

  const onToggleFavorite = () => toggleFavorite(item.id);


  return (
    <div className="card">
      {promotionBlock()}
      <BtnFavorites className="card__btnFn" statePos={favorite} onClick={onToggleFavorite}/>
      <div className="card__img">
        <img src={item.imgTitle} alt="" />
      </div>
      <div className="card__info">
        <Availability 
          availability={availability}
          className={'card__availability'}
        />
        <Price 
          oldPrice={item.oldPrice} 
          price={item.price}
          className={'card__price'}
        />
        <p className="card__desc txt14x22">{item.title}</p>
        <div className="card__btns">
          {availability && <Button className={'btnGrBd'} onClick={addToCart}><i className="icon-cart" /> В корзину</Button>}
          <Button className={'btnGy'}>Поподробнее</Button>
        </div>
      </div>
    </div>
    )
}

export default ItemCart