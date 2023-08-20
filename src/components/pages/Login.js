import "./StandardPage.css"
import Nav from "../../Nav";
import Footer from "../../Footer";
function Login () {
    return(
        <>
        <Nav/>
        <div className="background-container">
            <div className="center-text">
                <h1>Login</h1>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Login;