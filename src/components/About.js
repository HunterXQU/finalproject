import React from "react";
import "./About.css";
import Mario from "./images/Mario.jpg"
import Chef from "./images/chefB.jpg"
const About = () => {
    return (
        <div className="about-container">
            <div className="about-container-one">
                <div><h1 className="about-container-one-heading">Little Lemon</h1></div>
                <div><h2 className="about-container-one-place">Chicago</h2></div>
                <div><p  className="about-container-one-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. In hac habitasse platea dictumst. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod.</p></div>
            </div>
            <div className="about-container-two">
                <img className="about-container-image1" src={Chef}/>
                <img className="about-container-image2"src={Mario}/>
            </div>
        </div>
    );
}
export default About;
