import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchFavorites } from './store/actions/favorites';

import './assets/css/styles.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Viewed from './components/Viewed';

import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites())
    return () => {}
  }, [])
  
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      <Viewed />
      <Footer />
    </div>
  );
}

export default App;
