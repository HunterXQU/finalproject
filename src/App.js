import './App.css';
import React from "react";
import Main from './components/pages/Main';
import { AboutUs } from './components/pages/AboutUs';
import { Login } from './components/pages/Login';
import { Menu } from './components/pages/Menu';
import { Order } from './components/pages/Order';
import { Reservations } from './components/pages/Reservations';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={Main} />
        <Route path='/AboutUs' element={AboutUs} />
        <Route path='/Login' element={Login} />
        <Route path='/Menu' element={Menu} />
        <Route path='/Order' element={Order} />
        <Route path='/Reservations' element={Reservations} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;