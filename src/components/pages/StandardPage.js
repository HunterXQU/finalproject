import "./StandardPage.css";
import Nav from "../../Nav";
import Footer from "../../Footer";
import { BrowserRouter } from 'react-router-dom'
export const StandardPage = ({children}) => {
    return(
        <BrowserRouter>
            <Nav/>
            <section className="background" style={{"background-image" : "../images/location.jpg"}}>{children}</section>
            <Footer/>
        </BrowserRouter>
    )
}
