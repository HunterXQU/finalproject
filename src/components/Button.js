import "./Button.css";
import React from "react";
import {Link} from 'react-router-dom';

const STYLES = ['btn-primary', 'btn-secondary'];
const LINKS = ['/reservations', '/order', '/menu'];
const Button = ({children, buttonStyle, buttonLink}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];
    const checkButtonLink = LINKS.includes(buttonLink) ? buttonLink: LINKS[0];
    return (
        <Link to={checkButtonLink} className='btn-mobile'>
            <button
            className={checkButtonStyle}
            >
                {children}
            </button>
        </Link>
    )
};

export default Button;