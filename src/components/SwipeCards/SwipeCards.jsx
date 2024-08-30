import "./SwipeCards.scss";

const SwipeCards = () =>{
    return (
        <div className = "swipeCards" id = "how">
            <div id = "swipeCard3" className = "swipeCard">
                <p>Send a link to your friends and you're ready to go.</p>
            </div>
            <div id = "swipeCard2" className = "swipeCard">
                <p>Algorithm automatically picks the best time and place for you.</p>
            </div>
            <div id = "swipeCard1" className = "swipeCard">
                <p>Swipe left or right and quickly decide on day or place you'll meet.</p>
            </div>
        </div>
    );
}

export default SwipeCards;