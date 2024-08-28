import {useLayoutEffect} from "react";
import QR             from "../../assets/QR.png";
import GooglePlayLogo from "../../assets/GooglePlayLogo.webp";
import "./Header.scss";

const Header = () =>{
    useLayoutEffect(() => {
        const animateLetterOut = (cw, i) =>{
            setTimeout(() =>{
                cw[i].className = "letter out";
            }, i * 80);
        }

        const animateLetterIn = (nw, i) =>{
            setTimeout(() =>{
                nw[i].className = "letter in";
            }, 340 + i * 80);
        }

        const splitLetters = (word) =>{
            const content = word.innerHTML;
            word.innerHTML = "";
            const letters = [];
            for (let i = 0; i < content.length; i++) {
                const letter = document.createElement("span");
                letter.className = "letter";
                letter.innerHTML = content.charAt(i);
                word.appendChild(letter);
                letters.push(letter);
            }
            wordArray.push(letters);
        }

        const words = document.getElementsByClassName("word");
        const wordArray = [];
        let currentWord = 0;

        words[currentWord].style.opacity = 1;
        for (let i = 0; i < words.length; i++) {
            splitLetters(words[i]);
        }

        const changeWord = () =>{
            const cw = wordArray[currentWord];
            const nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
            for (let i = 0; i < cw.length; i++) {
                animateLetterOut(cw, i);
            }

            for (let i = 0; i < nw.length; i++) {
                nw[i].className = "letter behind";
                nw[0].parentElement.style.opacity = 1;
                animateLetterIn(nw, i);
            }
            currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
        }

        changeWord();
        setInterval(changeWord, 2000);
    }, []);

    return (
        <div className = "header">
            <div className = "headerContainer">
                <div className = "changingText">
                    <h1>
                        <span className = "start">Can’t Decide&nbsp;</span>
                        <span className = "word">When</span>
                        <span className = "word">Where</span>
                        <span className = "word">Time</span>
                        <br/>To Meet?
                    </h1>
                </div>
                
                <div className = "infoContainer">
                    <p className = "infoText">
                        No more back and forth messages. Just open up a poll and let your friends swipe to vote on the best time to meet. Wentumit will automatically find the best time / place / day for everyone. So you can spend less time planning and more time meeting.
                    </p>
                    <p className = "infoText">
                        Start using Wentumit today!
                    </p>
                    <div className = "startUsingContainer">
                        <div className = "qrContainer">
                            <img className = "qr noSelect" src = {QR} alt = "qr" />
                            <a href = "https://play.google.com/store/apps/details?id=com.wentumit.www.twa&hl=en" target = "_blank" className = "googlePlayContainer">
                                <img src = {GooglePlayLogo} alt = "" />
                                <p>Google Play</p>
                            </a>
                        </div>

                        <p>or</p>

                        <a href = "">On Your Browser</a>
                    </div>
                    {/* <CTA/> */}
                    
                    <p className = "infoText">
                        Completely Free.
                    </p>
                </div>
                

                <div className = "ideasContainer">
                    <div className = "idea ideaLeft idea1 noSelect">
                        <p>I'm available on Tuesday<br/>but not on Friday 1.</p>
                    </div>
                    <div className = "idea ideaLeft idea2 noSelect">
                        <p>I'm available on Tuesday<br/>but not on Friday 2.</p>
                    </div>
                    <div className = "idea ideaLeft idea3 noSelect">
                        <p>I'm available on Tuesday<br/>but not on Friday 3.</p>
                    </div>
                    <div className = "idea ideaRight idea4 noSelect">
                        <p>I'm available on Tuesday<br/>but not on Friday 4.</p>
                    </div>
                    <div className = "idea ideaRight idea5 noSelect">
                        <p>I'm available on Tuesday<br/>but not on Friday 5.</p>
                    </div>
                    <div className = "idea ideaRight idea6 noSelect">
                        <p>I'm available on Tuesday<br/>but not on Friday 6.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;