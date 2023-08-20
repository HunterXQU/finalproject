import './App.css';
import React from "react";
import Main from './components/pages/Main';
import AboutUs from './components/pages/AboutUs';
import Login from './components/pages/Login';
import Menu from './components/pages/Menu';
import Order from './components/pages/Order';
import Reservations from './components/pages/Reservations';
import Confirmation from './components/pages/Confirmation';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
      <Router>
      <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Menu' element={<Menu/>} />
        <Route path='/Order' element={<Order/>} />
        <Route path='/Reservations' element={<Reservations/>} />
        <Route path='/Confirmation' element={<Confirmation/>} />
      </Routes>
      </Router>
  );
}

export default App;