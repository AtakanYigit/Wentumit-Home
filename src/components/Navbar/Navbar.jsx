import Logo  from "../../Assets/LogoNavbar.png";
import "./Navbar.scss";

const Navbar = () =>{
    return (
        <nav>
            <div>
                <a href = "#" className = "navLogo">
                    <img src = {Logo} alt = "Wentumit"/>
                </a>
                <a href = "#">Home</a>
                <a href = "#layer0">Features</a>
            </div>

            <a href = "https://www.wentumit.com/">
                Start Using Now!
            </a>
        </nav>
    );
}

export default Navbar;