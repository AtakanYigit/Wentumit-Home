import SS1 from "../../assets/Screenshots/SS1.png";
import SS2 from "../../assets/Screenshots/SS2.png";
import SS3 from "../../assets/Screenshots/SS3.png";
import SS4 from "../../assets/Screenshots/SS4.png";
import "./Screenshots.scss";

const Screenshots = () =>{
    return (
        <div className = "screenshots" id = "screenshots">
            <img className = "screenshot noSelect" src = {SS1} alt = "Screenshot"/>
            <img className = "screenshot noSelect" src = {SS2} alt = "Screenshot"/>
            <img className = "screenshot noSelect" src = {SS3} alt = "Screenshot"/>
            <img className = "screenshot noSelect" src = {SS4} alt = "Screenshot"/>
        </div>
    );
}

export default Screenshots;
