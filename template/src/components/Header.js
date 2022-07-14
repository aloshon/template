import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return <>
        <h1>Loak Interview</h1>
        <nav className="navbar">
            <span className="navbar-link">
                <Link className="link"  to={"/"}>Home</Link>
            </span>
            <span className="navbar-link">
                <Link className="link"  to={"/about"}>About</Link>
            </span>
            <span className="navbar-link">
                <Link className="link"  to={"/profile"}>Profile</Link>
            </span>
        </nav>
    </>;
}

export default Header