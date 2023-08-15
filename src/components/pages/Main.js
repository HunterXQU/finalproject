import React from "react";
import Specials from "../Specials";
import { CallToAction } from "../CallToAction";
import Testimonials from "../Testimonials";
import About from "../About";
import Footer from "../../Footer";
import { Login } from "./Login";
const Main = () =>{
    return(
        <main>
            <CallToAction/>
            <Specials/>
            <Testimonials/>
            <About/>
            <Footer/>
            <Login/>
        </main>
    );
}
export default Main;