import React from 'react'
import SocialLinks from './elements/SocialLinks'

function Footer() {

  const links = [
    {
      link: './', 
      img: "./assets/img/icon/social/facebook.png", 
      name: 'facebook'
    },
    {
      link: './', 
      img: "./assets/img/icon/social/vk.png", 
      name: 'vk'
    },
    {
      link: './', 
      img: "./assets/img/icon/social/inst.png", 
      name: 'instagram'
    }
  ]

  return (
    <footer className="footer">
      <div className="wrapper footer__wrap">
        <div className="footer__map"><img src="../assets/img/content/map/foot.jpg" alt="" /></div>
        <div className="footer__inf">
          <div className="footer__col">
            <p className="title">Компания</p>
            <ul className="footer___list">
              <li className="footer__item">
                <a href="#" className="footer__link">О компании</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Политика конфиденциальности</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Гарантия и сервис</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="title">Информация</p>
            <ul className="footer___list">
              <li className="footer__item">
                <a href="#" className="footer__link">Условия оплаты</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Доставка и самовывоз</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Сборка и установка бассейнов</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Возврат</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <SocialLinks links={links}/>
            <p className="txt14x22 colGry">
              Предоставленная на сайте информация несёт справочный характер и не является публичной офертой, определяемой положениями Статьи 437 ГК РФ.
            </p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">2022 © Бассейн.Ру - Магазин бассейнов и оборудования</div>
    </footer>
  )
}

export default Footer