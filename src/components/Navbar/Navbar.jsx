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
                <a href = "#screenshots">Screenshots</a>
            </div>

            <a href="">
                Start Using Now!
            </a>
        </nav>
    );
}

export default Navbar;