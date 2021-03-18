import logo from '../assets/logo-white.png';
import { Link, NavLink } from 'react-router-dom';

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
              <NavLink to="/" className="header__nav-link" exact>Stores</NavLink>
            </li>
            <li>
              <NavLink to="/videos" className="header__nav-link" exact>Videos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;