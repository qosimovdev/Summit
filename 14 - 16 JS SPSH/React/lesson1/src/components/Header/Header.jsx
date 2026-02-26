import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">My App</div>
      <div className="nav">
        <ul className="ul">
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
