import GooglePlayLogo from "../../assets/GooglePlayLogo.webp";
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

            <div className = "startUsingContainer">
                <a href = "https://play.google.com/store/apps/details?id=com.wentumit.www.twa&hl=en" target = "_blank" className = "googlePlayContainer">
                    <div className = "googlePlayContainerInner">
                        <img src = {GooglePlayLogo} alt = "" />
                        <p>Google Play</p>
                    </div>
                </a>

                <p className = "or">or</p>

                <a className = "onYourBrowserButton" href = "https://www.wentumit.com/">
                    <span className = "iconWrapper">
                        <svg width = "10" className = "iconSvg" xmlns = "http://www.w3.org/2000/svg" fill = "none" viewBox = "0 0 14 15">
                            <path fill = "#000000" d = "M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                        </svg>
                        
                        <svg className = "iconSvg  iconSvg--copy" xmlns = "http://www.w3.org/2000/svg" width = "10" fill = "none" viewBox = "0 0 14 15">
                            <path fill =   "#000000" d = "M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                        </svg>
                    </span>
                    On Your Browser
                </a>
            </div>
                                    
            <p className = "completelyFree">
                Completely Free!
            </p>
        </div>
    );
}

export default Outro;