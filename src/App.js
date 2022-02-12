import React, { useEffect, useState } from 'react'
import Header from './components/Header';

import ItemCart from './components/ItemCart';


import './assets/css/styles.css';
import Footer from './components/Footer';
import Category from './components/Category';

function App() {

  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/listItems").then(item => item.json()).then(item => setCard(item))
  
    return () => {}
  }, [])
  
  const numb = 2;
  return (
    <div className="App">
      <Header />
      <section>
        <div className="wrapper wrapper--tp">
          <Category 
            items={['Хит','Новинка','Акция','Модель 2021 года']}
          />
          <ul className="cardList podTp loader--ins">
            {card.map(item => {
              return (
                <li className="cardList__item card--wrap" key={item.id}>
                  <ItemCart 
                    promotion={item.promotion}
                    favorite={false}
                    img={item.imgTitle}
                    oldPrice={item.Oldprice}
                    price={item.price}
                    title={item.title}
                    availability={item.number > 0}
                  />
                </li>
              )
            })}
            <div className="loader active">
              <div className="loader__icon"><i className="icon-loader" /></div>
            </div>
          </ul>
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
