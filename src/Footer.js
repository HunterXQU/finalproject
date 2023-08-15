import { Link } from "react-router-dom";
import "./Footer.css"
import { Login } from "./components/pages/Login";
import { Menu } from "./components/pages/Menu";
import { Order } from "./components/pages/Order";
import { AboutUs } from "./components/pages/AboutUs";
import {Reservations} from "./components/pages/Reservations"
export default function Footer(){
    return(
        <footer className="footer">
            <div className="logo">
                <img src="LittleLemon.png"/>
            </div>
            <ul className="navigation">
                <h4>Navigation</h4>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            <div className="contact">
                <h4>Contact</h4>
                <p>Address</p>
                <p>389-845-678</p>
                <p>LittleLemon@gmail.com</p>
            </div>
            <ul className="media">
                <li><a href=""><img src="instagram-icon-33475.png" width="75" height="75"></img></a></li>
                <li><a href=""><img src="logo-facebookpng-32204.png" width="75" height="75"></img></a></li>
                <li><a href=""><img src="whatsapp-logo-png-2261.png" width="75" height="75"></img></a></li>
            </ul>
        </footer>
    );
}

