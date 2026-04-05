import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  console.log("Header");

  return (
    <>
      <header className="header">
        <div className="logo">Router</div>
        <nav className="nav">
          <Link className="link" to={"/"}>
            Home
          </Link>
          <Link className="link" to={"/about"}>
            About
          </Link>
          <Link className="link" to={"/contact"}>
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
