import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import BGShape from "./assets/BackgrounShape.svg"
import Phone from "./assets/Phone.png"
import Footer from "./components/Footer/Footer"
import "./App.scss"

const App = () =>{
    return (
        <>
            <Navbar/>
            <Header/>
            <img className = "bgShape noSelect" src = {BGShape} alt = ""/>
            <img className = "phone noSelect" src = {Phone} alt = ""/>

            <Footer/>
        </>
    )
}

export default App