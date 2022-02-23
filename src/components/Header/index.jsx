import React, {useState} from 'react'
import Navigation from './Navigation';
import NavTwoIcon from './NavTwoIcon';
import Phones from './Phones';
import Button from '../elements/Button';
import TitleRow from '../elements/TitleRow';

import imgLogo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';
import CartList from '../CartList';
import { useSelector } from 'react-redux';
import SpacePage from '../SpacePage';

function Header() {
  const [search, setSearch] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [typePop, setTypePop] = useState(undefined)

  const navList = [
    ['./delivery.html','Доставка'],
    ['./repeyment.html','Оплата'],
    ['./about.html','О компании'],
    ['./contacts.html','Контакты'],
  ]

  const phones = [
    ['tel:84951202601','8 (495) 120-26-01'],
    ['tel:84951202601','8 (495) 120-26-01'],
  ]



  const lineHead = () => {
    return (<>
      <div></div>
      <Button className={'btnGrBd header__catag'} onClick={()=>{togglePop('category')}}>
        <i className="icon-cataloge" />
        Каталог
      </Button>
      <Navigation arrayNav={navList} />
      <Phones array={phones}/>
    </>)
  }

  const closePop = () => {
    setTypePop(undefined);
    setPopupOpen(false);
  }

  const openPop = (name) => {
    setTypePop(name)
    setPopupOpen(true);
  }

  const togglePop = (name) => {
    typePop === name ? closePop() : openPop(name);
  }

  const cartCount = useSelector(({cart}) => cart.totalCount)
  const favoritesCount = useSelector(({favorites}) => favorites.totalCount)


  return (
    <header className="header">
      <div className="header__main">
        <div className="header__wrap wrapper">
          <Link to="./" className="logo">
            <img src={imgLogo} alt="BASSEYN" />
          </Link>
          <div className="header__content" id="headerContent">
            {!search && lineHead()}
            <NavTwoIcon 
              search={search} 
              setSearch={setSearch} 
              favoriteFunc={() => togglePop('favorite')} 
              cartFunc={()=>{togglePop('cart')}}
            />
          </div>
          <button className="menuBtn">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className={"header__hover " + (popupOpen ? 'active' : '')  }>
        <div className="header__hovers">
          <div className={"header__item header__inf " + (typePop === 'favorite' ? 'active' : '')}>
            <div className="wrapper wrapper--tp">
              <div className="topRow">
                <h4 className="topRow__title title">Избранное</h4>
                {(favoritesCount > 0) && <p className="numCl">{favoritesCount}</p>}
              </div>
              {
                favoritesCount > 0 ? 
                <>
                  <ul className="cardList podTp">
                    <li className="cardList__item card--wrap">
                      <div className="card">
                        <div className="card__presentation">
                          <p className="presen presen--green">Хит</p>
                          <p className="presen presen--yellow">Акция</p>
                        </div>
                        <button className="card__btnFn btnBin"><i className="icon-bin" /></button>
                        <div className="card__img"><img src="./img/content/card/1.jpg" alt="" /></div>
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
                        <button className="card__btnFn btnBin"><i className="icon-bin" /></button>
                        <div className="card__img"><img src="./img/content/card/1.jpg" alt="" /></div>
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
                        <button className="card__btnFn btnBin"><i className="icon-bin" /></button>
                        <div className="card__img"><img src="./img/content/card/2.jpg" alt="" /></div>
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
                        <button className="card__btnFn btnBin"><i className="icon-bin" /></button>
                        <div className="card__img"><img src="./img/content/card/3.jpg" alt="" /></div>
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
                  </ul>
                  <div className="podTp btnWraper">
                    <Link to="/favorites">
                      <Button className={'btnGy'}>
                        Перейти в избранное
                      </Button>
                    </Link>
                  </div>
                </> : <SpacePage type="favorites"/>
              }
            </div>
          </div>
          <div className={"header__item header__inf " + (typePop === 'cart' ? 'active' : '')}>
            <div className="wrapper wrapper--tp">
              <TitleRow>
                <h4 className="topRow__title title">Корзина</h4>
                {(cartCount > 0) && <p className="numCl">{cartCount}</p>}
              </TitleRow>
              {
                cartCount > 0 ? 
                <>
                  <CartList />
                  <div className="podTp btnWraper">
                    <a href="#" className="btn btnGr">Перейти в корзину</a>
                  </div>
                </> : <SpacePage type="cart"/>
              }
            </div>
          </div>
          <div className={"header__item header__category " + (typePop === 'category' ? 'active' : '')}>
            <div className="wrapper category">
              <ul className="category__list">
                <li className="category__item">
                  <button className="category__btn active" data-tab-btn="tab1">
                    <span className="category__icon" style={{fontSize: '14px'}}><i className="icon-1" /></span>
                    <span className="category__txt txt16x24">Бассейны</span>
                    <span className="category__arrow"><i className="icon-arrRight" /></span>
                  </button>
                </li>
                <li className="category__item">
                  <button className="category__btn" data-tab-btn="tab2">
                    <span className="category__icon" style={{fontSize: '16px'}}><i className="icon-2" /></span>
                    <span className="category__txt txt16x24">Батуты</span>
                    <span className="category__arrow"><i className="icon-arrRight" /></span>
                  </button>
                </li>
                <li className="category__item">
                  <button className="category__btn" data-tab-btn="tab3">
                    <span className="category__icon"><i className="icon-3" /></span>
                    <span className="category__txt txt16x24">Аксессуары и оборудование</span>
                    <span className="category__arrow"><i className="icon-arrRight" /></span>
                  </button>
                </li>
                <li className="category__item">
                  <button className="category__btn" data-tab-btn="tab4">
                    <span className="category__icon"><i className="icon-4" /></span>
                    <span className="category__txt txt16x24">Основное оборудование</span>
                    <span className="category__arrow"><i className="icon-arrRight" /></span>
                  </button>
                </li>
                <li className="category__item">
                  <button className="category__btn" data-tab-btn="tab5">
                    <span className="category__icon"><i className="icon-5" /></span>
                    <span className="category__txt txt16x24">Дополнительное оборудование</span>
                    <span className="category__arrow"><i className="icon-arrRight" /></span>
                  </button>
                </li>
                <li className="category__item">
                  <button className="category__btn" data-tab-btn="tab6">
                    <span className="category__icon" style={{fontSize: '17px'}}><i className="icon-6" /></span>
                    <span className="category__txt txt16x24">СПА бассейны, сауны, купели</span>
                    <span className="category__arrow"><i className="icon-arrRight" /></span>
                  </button>
                </li>
                <li className="category__item">
                  <button className="category__btn" data-tab-btn="tab7">
                    <span className="category__icon"><i className="icon-7" /></span>
                    <span className="category__txt txt16x24">Плавательные принадлежности</span>
                    <span className="category__arrow"><i className="icon-arrRight" /></span>
                  </button>
                </li>
                <li className="category__item">
                  <button className="category__btn" data-tab-btn="tab8">
                    <span className="category__icon"><i className="icon-8" /></span>
                    <span className="category__txt txt16x24">Химия для бассейнов</span>
                    <span className="category__arrow"><i className="icon-arrRight" /></span>
                  </button>
                </li>
                <li className="category__item">
                  <button className="category__btn" data-tab-btn="tab9">
                    <span className="category__icon"><i className="icon-9" /></span>
                    <span className="category__txt txt16x24">Все для строительства бассейнов</span>
                    <span className="category__arrow"><i className="icon-arrRight" /></span>
                  </button>
                </li>
                <li className="category__item">
                  <button className="category__btn" data-tab-btn="tab10">
                    <span className="category__icon" style={{fontSize: '18px'}}><i className="icon-10" /></span>
                    <span className="category__txt txt16x24">Пылесосы для бассейнов</span>
                    <span className="category__arrow"><i className="icon-arrRight" /></span>
                  </button>
                </li>
              </ul>
              <ul className="category__tabs">
                <li className="category__tab active" data-tab-item="tab1">
                  <ul className="category__subList">
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Каркасные бассейны
                        <span className="category__num">11</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны с надувным верхом
                        <span className="category__num">25</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Вкапываемые бассейны
                        <span className="category__num">4</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Деревянные бассейны
                        <span className="category__num">20</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link active">
                        Детские бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны для дачи
                        <span className="category__num">10</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Композитные бассейны
                        <span className="category__num">24</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Чаши, запчасти для бассейнов
                        <span className="category__num">18</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Морозоустойчивые бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Ремонтные наборы для чаши бассейна
                        <span className="category__num">16</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="category__tab" data-tab-item="tab2">
                  <ul className="category__subList">
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Вкапываемые бассейны
                        <span className="category__num">4</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Деревянные бассейны
                        <span className="category__num">20</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link active">
                        Детские бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны для дачи
                        <span className="category__num">10</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Композитные бассейны
                        <span className="category__num">24</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Чаши, запчасти для бассейнов
                        <span className="category__num">18</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Морозоустойчивые бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Ремонтные наборы для чаши бассейна
                        <span className="category__num">16</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="category__tab" data-tab-item="tab3">
                  <ul className="category__subList">
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Каркасные бассейны
                        <span className="category__num">11</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны с надувным верхом
                        <span className="category__num">25</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Вкапываемые бассейны
                        <span className="category__num">4</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Деревянные бассейны
                        <span className="category__num">20</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link active">
                        Детские бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны для дачи
                        <span className="category__num">10</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Композитные бассейны
                        <span className="category__num">24</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Чаши, запчасти для бассейнов
                        <span className="category__num">18</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Морозоустойчивые бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Ремонтные наборы для чаши бассейна
                        <span className="category__num">16</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="category__tab" data-tab-item="tab4">
                  <ul className="category__subList">
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Каркасные бассейны
                        <span className="category__num">11</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны с надувным верхом
                        <span className="category__num">25</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Вкапываемые бассейны
                        <span className="category__num">4</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Деревянные бассейны
                        <span className="category__num">20</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link active">
                        Детские бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны для дачи
                        <span className="category__num">10</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Композитные бассейны
                        <span className="category__num">24</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Чаши, запчасти для бассейнов
                        <span className="category__num">18</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Морозоустойчивые бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Ремонтные наборы для чаши бассейна
                        <span className="category__num">16</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="category__tab" data-tab-item="tab5">
                  <ul className="category__subList">
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Каркасные бассейны
                        <span className="category__num">11</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны с надувным верхом
                        <span className="category__num">25</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Вкапываемые бассейны
                        <span className="category__num">4</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны для дачи
                        <span className="category__num">10</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Композитные бассейны
                        <span className="category__num">24</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Чаши, запчасти для бассейнов
                        <span className="category__num">18</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Морозоустойчивые бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Ремонтные наборы для чаши бассейна
                        <span className="category__num">16</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="category__tab" data-tab-item="tab6">
                  <ul className="category__subList">
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Каркасные бассейны
                        <span className="category__num">11</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны с надувным верхом
                        <span className="category__num">25</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Вкапываемые бассейны
                        <span className="category__num">4</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Деревянные бассейны
                        <span className="category__num">20</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link active">
                        Детские бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны для дачи
                        <span className="category__num">10</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Композитные бассейны
                        <span className="category__num">24</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Чаши, запчасти для бассейнов
                        <span className="category__num">18</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Морозоустойчивые бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Ремонтные наборы для чаши бассейна
                        <span className="category__num">16</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="category__tab" data-tab-item="tab7">
                  <ul className="category__subList">
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Каркасные бассейны
                        <span className="category__num">11</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны с надувным верхом
                        <span className="category__num">25</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Вкапываемые бассейны
                        <span className="category__num">4</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Деревянные бассейны
                        <span className="category__num">20</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link active">
                        Детские бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны для дачи
                        <span className="category__num">10</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Композитные бассейны
                        <span className="category__num">24</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Чаши, запчасти для бассейнов
                        <span className="category__num">18</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Морозоустойчивые бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Ремонтные наборы для чаши бассейна
                        <span className="category__num">16</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="category__tab" data-tab-item="tab8">
                  <ul className="category__subList">
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Каркасные бассейны
                        <span className="category__num">11</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны с надувным верхом
                        <span className="category__num">25</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Вкапываемые бассейны
                        <span className="category__num">4</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Деревянные бассейны
                        <span className="category__num">20</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Морозоустойчивые бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Ремонтные наборы для чаши бассейна
                        <span className="category__num">16</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="category__tab" data-tab-item="tab9">
                  <ul className="category__subList">
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Каркасные бассейны
                        <span className="category__num">11</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны с надувным верхом
                        <span className="category__num">25</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Вкапываемые бассейны
                        <span className="category__num">4</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Деревянные бассейны
                        <span className="category__num">20</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link active">
                        Детские бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны для дачи
                        <span className="category__num">10</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Композитные бассейны
                        <span className="category__num">24</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Чаши, запчасти для бассейнов
                        <span className="category__num">18</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Морозоустойчивые бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Ремонтные наборы для чаши бассейна
                        <span className="category__num">16</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="category__tab" data-tab-item="tab10">
                  <ul className="category__subList">
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Каркасные бассейны
                        <span className="category__num">11</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны с надувным верхом
                        <span className="category__num">25</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Вкапываемые бассейны
                        <span className="category__num">4</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Деревянные бассейны
                        <span className="category__num">20</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link active">
                        Детские бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Бассейны для дачи
                        <span className="category__num">10</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Композитные бассейны
                        <span className="category__num">24</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Чаши, запчасти для бассейнов
                        <span className="category__num">18</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Морозоустойчивые бассейны
                        <span className="category__num">17</span>
                      </a>
                    </li>
                    <li className="category__subItem">
                      <a href="#" className="category__link">
                        Ремонтные наборы для чаши бассейна
                        <span className="category__num">16</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header__bg" onClick={closePop}>
        </div>
      </div>
    </header>
  )
}

export default Header;