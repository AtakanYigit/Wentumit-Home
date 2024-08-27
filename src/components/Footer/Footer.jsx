import Linkedin  from "../../Assets/LinkedIn.svg";
import Instagram from "../../Assets/Instagram.svg";
import "./Footer.scss";

const Footer = () =>{
    return (
        <footer>
            <p>©{new Date().getFullYear()} Wentumit</p>
            <div className = "footerSocials">
                <a href = "https://www.linkedin.com/company/klein-pixel/" target = "_blank" rel = "noopener">
                    <img src = {Linkedin} alt = "Linked in"/>
                </a>
                <a href = "https://www.instagram.com/klein_pixel/" target = "_blank" rel = "noopener">
                    <img src = {Instagram} alt = "Instagram"/>
                </a>
            </div>
            <p>Made With Love 🩷</p>
        </footer>
    );
}

export default Footer;