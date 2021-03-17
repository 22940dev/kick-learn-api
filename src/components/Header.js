import logo from '../assets/logo-white.png';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="header">
      <div className="wrapper header__flex-parent">

        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Shopkick"/>
          </Link>
        </div>

        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/" className="header__nav-link">Stores</Link>
            </li>
            <li>
              <Link to="/videos" className="header__nav-link">Videos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;