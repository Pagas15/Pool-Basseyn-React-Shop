import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { ferchStore } from '../store/actions/store';
import { setCategory } from '../store/actions/filters';

import Category from '../components/Category';
import ItemsList from '../components/ItemsList';

function Home() {
  const dispatch = useDispatch();

  let category = [
    ["hit","Хит"],
    ["promotion","Акция"],
    ["novelty","Новинка"],
    ["2021","Модель 2021 года"]
  ]
  
  const card = useSelector(({store}) => store.items);

  const onSetCategory = (item) => {
    dispatch(setCategory(activeCategory === item ? null : item))
  }
  
  const activeCategory = useSelector(({filters}) => filters.category);

  useEffect(() => {
    dispatch(ferchStore(activeCategory))
    return () => {}
  }, [activeCategory])
  

  return (
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
  )
}

export default Home