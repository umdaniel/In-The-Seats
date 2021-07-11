import "./Header.css";

const Header = () => {
    return(
        <span onClick={() => window.scroll(0, 0)} 
        className="header">
            🍿 In The Seats 🍿
        </span>
    );
}

export default Header;