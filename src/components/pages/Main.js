import React from "react";
import Specials from "../Specials";
import { CallToAction } from "../CallToAction";
import Testimonials from "../Testimonials";
import About from "../About";
import Footer from "../../Footer";
export default function Main(){
    return(
        <main>
            <CallToAction/>
            <Specials/>
            <Testimonials/>
            <About/>
            <Footer/>
        </main>
    );
}