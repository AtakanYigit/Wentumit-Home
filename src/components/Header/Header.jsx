import "./Header.scss";

const Header = () =>{
    return (
        <div className = "header">
            <div className = "headerContainer">
                <h1>Can’t Decide <span>When</span><br/>To Meet?</h1>
                <p>Habit-building doesn't have to be a lonely, difficult journey. Onlist's productivity app makes it fun, social, and rewarding, with gamification features that turn habit-forming into a game you can win. Get started today and start seeing results!</p>
                {/* <CTA/> */}
            </div>
        </div>
    );
}

export default Header;