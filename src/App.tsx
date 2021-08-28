import React from 'react';
// @ts-ignore
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle';

import Header from './components/Header';
import Home from './components/Home'
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Context from './Context';
import Login from './components/Login';

const App: React.FC = () => (
  <BrowserRouter>
    <Context>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/:movieId" element={<Movie />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
      <GlobalStyle />
    </Context>
  </BrowserRouter>
);

export default App;