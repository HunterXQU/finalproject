import React from "react";
import Specials from "../Specials";
import { CallToAction } from "../CallToAction";
import Testimonials from "../Testimonials";
import About from "../About";
import Nav from "../../Nav";
import Footer from "../../Footer";
import { Login } from "./Login";
function Main () {
    return(
        <main>
            <Nav/>
            <CallToAction/>
            <Specials/>
            <Testimonials/>
            <About/>
            <Footer/>
        </main>
    );
}
export default Main;