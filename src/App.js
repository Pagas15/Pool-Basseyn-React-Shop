import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ferchStore } from './store/actions/store';
import { setCategory } from './store/actions/filters';
import { fetchFavorites } from './store/actions/favorites';
import Header from './components/Header';

import ItemCart from './components/ItemCart';

import './assets/css/styles.css';
import Footer from './components/Footer';
import Category from './components/Category';
import Button from './components/Button';
import ItemsList from './components/ItemsList';



function App() {
  const dispatch = useDispatch();

  const card = useSelector(({store}) => store.items);
  const activeCategory = useSelector(({filters}) => filters.category);

  useEffect(() => {
    dispatch(ferchStore(activeCategory))
    return () => {}
  }, [activeCategory])

  useEffect(() => {
    dispatch(fetchFavorites())
  
    return () => {}
  }, [])
  

  let category = [
    ["hit","Хит"],
    ["promotion","Акция"],
    ["novelty","Новинка"],
    ["2021","Модель 2021 года"]
  ]

  const onSetCategory = (item) => {
    dispatch(setCategory(activeCategory === item ? null : item))
  }
  
  return (
    <div className="App">
      <Header />
      <section>
        <div className="wrapper wrapper--tp">
          <Category 
            items={category}
            onClickCategory={onSetCategory}
            activeCategory={activeCategory}
          />
          <ItemsList listItems={card} />
        </div>
      </section>
      <section className="viewed">
        <div className="wrapper wrapper--tp viewed__wrap">
          <div className="topRow">
            <h4 className="topRow__title title">Ранее вы смотрели</h4>
          </div>
          <ul className="cardList podTp">
            <li className="cardList__item card--wrap">
              <div className="card">
                <div className="card__presentation">
                  <p className="presen presen--green">Хит</p>
                  <p className="presen presen--yellow">Акция</p>
                </div>
                <button className="card__btnFn btnFavorites" data-btn-favorites>
                  <span className="btnFavorites__icon1"><i className="icon-heart" /></span>
                  <span className="btnFavorites__icon2"><i className="icon-heartGreen" /></span>
                </button>
                <div className="card__img"><img src="./assets/img/content/card/1.jpg" alt="" /></div>
                <div className="card__info">
                  <div className="card__availability availability">
                    <div className="availability__icon"><i className="icon-check" /></div>
                    <p className="availability__txt">Есть в наличии</p>
                  </div>
                  <p className="card__price price price--discount">
                    <span className="price__act">10 050 руб.</span>
                    <span className="price__old">13 070 руб.</span>
                  </p>
                  <p className="card__desc txt14x22">Песочный фильтр-насос 3028л/ч, резервуар для песка 8.5кг, фракция 0.45-0.85мм</p>
                  <div className="card__btns">
                    <button className="btn btnGrBd"><i className="icon-cart" /> В корзину</button>
                    <button className="btn btnGy">Поподробнее</button>
                  </div>
                </div>
              </div>
            </li>
            <li className="cardList__item card--wrap">
              <div className="card">
                <div className="card__presentation">
                  <p className="presen presen--green">Хит</p>
                  <p className="presen presen--yellow">Акция</p>
                </div>
                <button className="card__btnFn btnFavorites" data-btn-favorites>
                  <span className="btnFavorites__icon1"><i className="icon-heart" /></span>
                  <span className="btnFavorites__icon2"><i className="icon-heartGreen" /></span>
                </button>
                <div className="card__img"><img src="./assets/img/content/card/1.jpg" alt="" /></div>
                <div className="card__info">
                  <div className="card__availability availability">
                    <div className="availability__icon"><i className="icon-check" /></div>
                    <p className="availability__txt">Есть в наличии</p>
                  </div>
                  <p className="card__price price price--discount">
                    <span className="price__act">10 050 руб.</span>
                    <span className="price__old">13 070 руб.</span>
                  </p>
                  <p className="card__desc txt14x22">Песочный фильтр-насос 3028л/ч, резервуар для песка 8.5кг, фракция 0.45-0.85мм</p>
                  <div className="card__btns">
                    <button className="btn btnGrBd"><i className="icon-cart" /> В корзину</button>
                    <button className="btn btnGy">Поподробнее</button>
                  </div>
                </div>
              </div>
            </li>
            <li className="cardList__item card--wrap">
              <div className="card">
                <div className="card__presentation">
                  <p className="presen presen--green">Хит</p>
                  <p className="presen presen--yellow">Акция</p>
                </div>
                <button className="card__btnFn btnFavorites" data-btn-favorites>
                  <span className="btnFavorites__icon1"><i className="icon-heart" /></span>
                  <span className="btnFavorites__icon2"><i className="icon-heartGreen" /></span>
                </button>
                <div className="card__img"><img src="./assets/img/content/card/2.jpg" alt="" /></div>
                <div className="card__info">
                  <div className="card__availability availability availability--none">
                    <div className="availability__icon"><i className="icon-none" /></div>
                    <p className="availability__txt">Нет в наличии</p>
                  </div>
                  <p className="card__price price">10 050 руб.</p>
                  <p className="card__desc txt14x22">
                    Каркасный бассейн Steel Pro Max 427х122см, 15232л, фил.-насос 3028л/ч, лестница, тент, Bestway, 5612X BW
                  </p>
                  <div className="card__btns">
                    <button className="btn btnGy">Поподробнее</button>
                  </div>
                </div>
              </div>
            </li>
            <li className="cardList__item card--wrap">
              <div className="card">
                <div className="card__presentation">
                  <p className="presen presen--green">Хит</p>
                  <p className="presen presen--yellow">Акция</p>
                </div>
                <button className="card__btnFn btnCart"><i className="icon-cart" /></button>
                <div className="card__img"><img src="./assets/img/content/card/3.jpg" alt="" /></div>
                <div className="card__info">
                  <div className="card__availability availability">
                    <div className="availability__icon"><i className="icon-check" /></div>
                    <p className="availability__txt">Есть в наличии</p>
                  </div>
                  <p className="card__price price price--discount">
                    <span className="price__act">10 050 руб.</span>
                    <span className="price__old">13 070 руб.</span>
                  </p>
                  <p className="card__desc txt14x22">
                    Электроподогреватель для воды в бассейне до 4000л, 0.99 кВт, 150х53см
                  </p>
                  <div className="card__btns">
                    <button className="btn btnGrBd"><i className="icon-cart" /> В корзину</button>
                    <button className="btn btnGy">Поподробнее</button>
                  </div>
                </div>
              </div>
            </li>
            <li className="cardList__item card--wrap">
              <div className="card">
                <div className="card__presentation">
                  <p className="presen presen--green">Хит</p>
                  <p className="presen presen--yellow">Акция</p>
                </div>
                <button className="card__btnFn btnFavorites" data-btn-favorites>
                  <span className="btnFavorites__icon1"><i className="icon-heart" /></span>
                  <span className="btnFavorites__icon2"><i className="icon-heartGreen" /></span>
                </button>
                <div className="card__img"><img src="./assets/img/content/card/1.jpg" alt="" /></div>
                <div className="card__info">
                  <div className="card__availability availability">
                    <div className="availability__icon"><i className="icon-check" /></div>
                    <p className="availability__txt">Есть в наличии</p>
                  </div>
                  <p className="card__price price price--discount">
                    <span className="price__act">10 050 руб.</span>
                    <span className="price__old">13 070 руб.</span>
                  </p>
                  <p className="card__desc txt14x22">Песочный фильтр-насос 3028л/ч, резервуар для песка 8.5кг, фракция 0.45-0.85мм</p>
                  <div className="card__btns">
                    <button className="btn btnGrBd"><i className="icon-cart" /> В корзину</button>
                    <button className="btn btnGy">Поподробнее</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
