import { Link } from "react-router-dom";
import "./Footer.css"
export default function Footer(){
    return(
        <footer className="footer">
            <div className="foot-logo">
                <img src="LittleLemon.png"/>
            </div>
            <ul className="navigation">
                <h4>Navigation</h4>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AboutUs">About</Link></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/Reservations">Reservations</Link></li>
                <li><Link to="/Order">Order Online</Link></li>
                <li><Link to="/Login">Login</Link></li>
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

