import React, { useState, useEffect} from 'react'
import useDebounce from '../../customHooks/useDebounce'

function NavTwoIcon({search, setSearch, seachFunc, favoriteFunc, cartFunc}) {
  const [value, setValue] = useState('');

  const searcFunction = () => {
    seachFunc && seachFunc(value);
  }

  const openSearch = () => {
    if(search){
      searcFunction()
    } else {
      setSearch(true)
    }
  }

  const closeSearch = () => {
    setSearch(false)
  }

  const handleOnChange = e => {
    setValue(e.target.value)
  }

  const customDebounce = useDebounce(value, 500);

  useEffect(() => {
    if(customDebounce){
      searcFunction()
    }
  }, [customDebounce])
  

  return (
    <ul className={!search ? 'navTwo' : 'navTwo activeSearch'}>
      <li className="navTwo__item search">
        <button className="navTwo__link search__btn" onClick={openSearch}><i className="icon-search" /></button>
        <div className="search__input">
          <input type="text" placeholder="Место для дазвания желаемого товара..." value={value} onChange={handleOnChange} />
        </div>
        <button className="btnClose" onClick={closeSearch}><i className="icon-close" /></button>
      </li>
      <li className="navTwo__item">
        <a onClick={favoriteFunc} className="navTwo__link"><i className="icon-heart" /><span>4</span></a>
      </li>
      <li className="navTwo__item">
        <a onClick={cartFunc} className="navTwo__link"><i className="icon-cart" /><span>2</span></a>
      </li>
    </ul>
  )
}


export default NavTwoIcon;