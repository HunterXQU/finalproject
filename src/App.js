import './App.css';
import React from "react";
import Main from './components/pages/Main';
import { AboutUs } from './components/pages/AboutUs';
import { Login } from './components/pages/Login';
import { Menu } from './components/pages/Menu';
import { Order } from './components/pages/Order';
import { Reservations } from './components/pages/Reservations';
import Nav from './Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/AboutUs' component={AboutUs}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Menu' component={Menu}/>
        <Route path='/Order' component={Order}/>
        <Route path='/Reservations' component={Reservations}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
