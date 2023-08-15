import React from 'react';
import './Testimony.css';
import star from "./images/stars.png"
const Testimony = ({name, description, imageSrc, background}) => {
    return(
        <div className="testimony">
            <img className="stars" src={star}/>
            <img className="testimony-img" src={imageSrc}/>
            <div className='testimony-name'>{name}</div>
            <div className="testimony-description">{description}</div>
        </div>
    )
}

export default Testimony;