import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">My App</div>

      <nav className="nav">
        <ul className="ul">
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
