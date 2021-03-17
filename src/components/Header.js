
const Header = () => {

  return (
    <header>
      <div className="header__logo">
        <a href="index.html">
          Shopkick
        </a>
      </div>

      <nav className="header__ nav">
        <ul>
          <li>
            <a href="#">Stores</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;