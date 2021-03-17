import logo from '../assets/logo-white.png';

const Header = () => {

  return (
    <header className="header">
      <div className="wrapper header__flex-parent">

        <div className="header__logo">
          <a href="index.html">
            <img src={logo} alt="Shopkick"/>
          </a>
        </div>

        <nav className="header__nav">
          <ul>
            <li>
              <a className="header__nav-link" href="#">Stores</a>
            </li>
            <li>
              <a className="header__nav-link" href="#">Videos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;