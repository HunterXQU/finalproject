import './App.css';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Nav from "./Nav";n
function App() {
  return (
    <React.Fragment className="App">
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
