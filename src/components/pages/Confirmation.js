import "./Confirmation.css";
import Button from "../Button";
function Confirmation () {
    return(
        <div className="confirm-container">
            <div className="confirm-inner-container">
                <h1 className="confirm-title">Your Reservation is Confirmed</h1>
                <Button buttonStyle="btn-primary" buttonLink={"/"}>Home</Button>
            </div>
        </div>

    );
}
export default Confirmation;