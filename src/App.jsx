import Navbar        from "./components/Navbar/Navbar";
import Header        from "./components/Header/Header";
import BGShape       from "./assets/BackgrounShape.svg";
import Phone         from "./assets/Phone.png";
import SwipeCards    from "./components/SwipeCards/SwipeCards";
import Outro         from "./components/Outro/Outro";
import Screenshots   from "./components/Screenshots/Screenshots";
import Footer        from "./components/Footer/Footer";
import gsap          from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import {useGSAP}     from '@gsap/react';
import "./App.scss"

const App = () =>{
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const bgElement  = document.getElementById("bgShape");
        const phone      = document.getElementById("phone");
        const ideasLeft  = document.getElementsByClassName("ideaLeft");
        const ideasRight = document.getElementsByClassName("ideaRight");

        /* --------- Idea Cards --------- */
        for (let i = 0; i < ideasLeft.length; i++) {
            gsap.to(".ideaLeft", {left: "41vw", top: "57vw", rotate: -90, scale: .8, opacity: 0, scrollTrigger: {
                trigger: ".ideaLeft",
                start:   "top 5%",
                end:     "bottom -40%",
                scrub:   true,
            }});
        }

        for (let i = 0; i < ideasRight.length; i++) {
            gsap.to(".ideaRight", {right: "41vw", top: "57vw", rotate: 90, scale: .8, opacity: 0, scrollTrigger: {
                trigger: ".ideaRight",
                start:   "top 5%",
                end:     "bottom -40%",
                scrub:   true,
            }});
        }

        /* --------- Background Scale --------- */
        gsap.fromTo(bgElement, {scale: 1, y: 0}, {scale: 2.5 , y: -100, scrollTrigger: {
            trigger: bgElement,
            start:  "20% 100%",
            end:    "top 40%",
            scrub:  true,
        }});

        /* --------- Background Fade Away --------- */
        gsap.to(bgElement, {opacity: 0, scrollTrigger: {
            trigger: phone,
            start:  "top 10%",
            end:    "bottom 0%",
            scrub:  true,
        }});

        /* --------- Phone --------- */
        gsap.fromTo(phone, {scale: .6, y: 0}, {scale: 1, y:  "-20vh", scrollTrigger: {
            trigger: phone,
            start:   "top 85%",
            end:     "top 0%",
            scrub:   true,
        }});

        /* --------- SwipeCards --------- */
        //Swipe Card 1
        gsap.to("#swipeCard1", {x: "33vw", rotate: 90, backgroundColor: "#FF248D", color: "#FFFFFF", opacity: 0, scrollTrigger: {
            trigger: ".swipeCards",
            start:   "bottom 100%",
            end:     "bottom 80%",
            scrub:   true,
        }});

        //Swipe Card 2
        gsap.to("#swipeCard2", {x: "-33vw", rotate: -90, backgroundColor: "#000000", color: "#FFFFFF", opacity: 0, scrollTrigger: {
            trigger: ".swipeCards",
            start:   "bottom 60%",
            end:     "bottom 40%",
            scrub:   true,
        }});

        //Swipe Card 3
        gsap.to("#swipeCard3", {y: "-33vw", x: "5vw", rotate: 15, backgroundColor: "#9124FF", color: "#FFFFFF", opacity: 0, scrollTrigger: {
            trigger: ".swipeCards",
            start:   "bottom 20%",
            end:     "bottom 0%",
            scrub:   true,
        }});

        //Pin SwipeCards
        ScrollTrigger.create({
            trigger:    ".swipeCards",
            start:      "top 10%",
            end:        "bottom -10%",
            pin:        true,
            pinSpacing: false
        })
    });
    
    return (
        <div>
            <Navbar/>
            <Header/>
            <img id = "bgShape" className = "bgShape noSelect" src = {BGShape} alt = ""/>
            <img id = "phone"   className = "phone noSelect"   src = {Phone}   alt = ""/>
            <SwipeCards/>
            <Outro/>
            <Screenshots/>
            <Footer/>
        </div>
    )
}

export default App