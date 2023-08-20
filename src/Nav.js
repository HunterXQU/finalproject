import React, {useState, useEffect} from 'react';
import './Nav.css'
import Close from "./components/images/close.png";
import Hamburger from "./components/images/hamburger.png";
import {Link} from "react-router-dom";
export default function Nav(){
    const [click, setClick] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleClick = () => {
        setClick(!click);
    };

    useEffect(() => {
        function handleResize() {
          const newWidth = window.innerWidth;
          setWindowWidth(newWidth);
          if (newWidth <= 960) {
            setClick(false);
          } else {
            setClick(true);
          }
        }
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    return(
           <nav className="navbar">
                <div className="logo">
                    <Link to="/"><img src="LittleLemon.png" width="300" height="110"/></Link>
                </div>
                <ul
                    className={click ? "menu" : "menuActive"}
                >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">About</Link></li>
                    <li><Link to="/Menu">Menu</Link></li>
                    <li><Link to="/Reservations">Reservations</Link></li>
                    <li><Link to="/Order">Order Online</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
                <div className="mobile" onClick={handleClick}>
                    <img src={click ? Close : Hamburger}></img>
                </div>
            </nav>
    );
}
