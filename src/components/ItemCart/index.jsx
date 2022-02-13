import React from 'react'
import PropTypes from 'prop-types';
import Button from '../Button';
import PromotionItem from '../PromotionItem';
import BtnFavorites from '../btns/BtnFavorites';
import Price from '../elements/Price';
import Availability from '../elements/Availability';

function ItemCart({promotion, favorite, img, oldPrice, price, title, availability, itemId}) {
  
  const promotionBlock = () => {
    if(promotion){
      return (<div className="card__presentation">
        {promotion.map(item => <PromotionItem type={item} key={item}/>)}
      </div>)
    }
  }

  return (
    <div className="card">
      {promotionBlock()}
      <BtnFavorites className="card__btnFn" statePos={favorite} />
      <div className="card__img">
        <img src={img} alt="" />
      </div>
      <div className="card__info">
        <Availability 
          availability={availability}
          className={'card__availability'}
        />
        <Price 
          oldPrice={oldPrice} 
          price={price}
          className={'card__price'}
        />
        <p className="card__desc txt14x22">{title}</p>
        <div className="card__btns">
          {availability && <Button className={'btnGrBd'}><i className="icon-cart" /> В корзину</Button>}
          <Button className={'btnGy'}>Поподробнее</Button>
        </div>
      </div>
    </div>
    )
}

export default ItemCart