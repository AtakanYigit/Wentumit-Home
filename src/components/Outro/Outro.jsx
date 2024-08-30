import QR from "../../assets/QR.png";
import "./Outro.scss";

const Outro = () =>{
    return (
        <div className = "outro">
            <p className = "bigText">
                Votes Say Best Day To<br/>
                <span>Start Using Wentumit</span> is <br/>
                Today
            </p>

            <img className = "qr noSelect" src = {QR} alt = "qr" />
            <a href="">Start Using Now</a>
            <p className = "freeText">Completely Free</p>
        </div>
    );
}

export default Outro;