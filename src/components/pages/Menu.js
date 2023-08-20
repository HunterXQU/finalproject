import "./StandardPage.css"
import Nav from "../../Nav";
import Footer from "../../Footer";
function Menu () {
    return(
        <>
        <Nav/>
        <div className="background-container">
            <div className="center-text">
                <h1>Menu</h1>
            </div>
        </div>
        <Footer/>
        </>
    )
};
export default Menu;