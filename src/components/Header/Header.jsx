import { useLayoutEffect } from "react";
import QR from "../../assets/QR.png";
import "./Header.scss";

const Header = () =>{
    /*
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
*/

    return (
        <div className = "header">
            <div className = "headerContainer">
                <div className = "changingText">
                    <h1>
                        <span className = "start">Can’t Decide&nbsp;</span>
                        <span className = "word">When</span>
                        <span className = "word">Where</span>
                        <span className = "word">Word</span>
                        <span className = "word">Word2</span>
                        <br/>To Meet?
                    </h1>
                </div>
                
                <div className = "infoContainer">
                    <p className = "infoText">Habit-building doesn't have to be a lonely, difficult journey. Onlist's productivity app makes it fun, social, and rewarding, with gamification features that turn habit-forming into a game you can win. Get started today and start seeing results!</p>
                    <img className = "qr noSelect" src = {QR} alt = "qr" />
                    {/* <CTA/> */}
                </div>
            </div>
        </div>
    );
}

export default Header;