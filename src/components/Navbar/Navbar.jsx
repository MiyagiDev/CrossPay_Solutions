import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Translation from '../Translation/Translation';
import crosspayLogo from '../../assets/logos/crosspay-solutions-logo.svg';
import './navbar.css';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/cerrar el menú móvil
  const location = useLocation();
  const { t } = useTranslation();

  const handleNavigation = (e, target) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      window.location.href = `/#${target}`;
    } else {
      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Cambiar el estado de apertura del menú móvil
  };

  return (
    <nav className={`Navbar-container ${scroll ? 'navbar-scrolled' : ''}`}>
      <div className="Navbar__column-1">
        <Link to="/" className="Navbar__column-1--logo">
          <img src={crosspayLogo} className="Navbar__column-1--img" alt="CrossPay Solution Logo" />
        </Link>
      </div>

      <div className="Navbar__column-2">
        <div className="Navbar__column-2-container">
          <ul>
            <li>
              <Link 
                to="/" 
                className={`Navbar__column-2--menu-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                {t("menu-1")}
              </Link>
            </li>
            <li>
              <Link 
                to="/smart-treasury" 
                className={`Navbar__column-2--menu-link ${location.pathname === '/smart-treasury' ? 'active' : ''}`}
              >
                {t("menu-2")}
              </Link>
            </li>
            <li>
              <a 
                className={`Navbar__column-2--menu-link ${['/fx-services', '/international-payments', '/legal-control-aml-kyc'].includes(location.pathname) ? 'active' : ''}`} 
                href="#services" 
                onClick={(e) => handleNavigation(e, 'services')}
              >
                {t("menu-3")}
              </a>
            </li>
            <li>
              <Link 
                to="/about-us" 
                className={`Navbar__column-2--menu-link ${location.pathname === '/about-us' ? 'active' : ''}`}
              >
                {t("menu-4")}
              </Link>
            </li>
            <li>
              <Link 
                to="/contact-us" 
                className={`Navbar__column-2--menu-link ${location.pathname === '/contact-us' ? 'active' : ''}`}
              >
                {t("menu-5")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="Navbar__column-3">
        <div className="Navbar__column-3--languaje">
          <Translation className="Navbar__column-3--languaje-icon" />
        </div>
        <div 
          className={`Navbar__column-3--hamburger ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Menú Móvil */}
      <div className={`Navbar__mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link 
              to="/" 
              className={`Navbar__mobile-menu-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              {t("menu-1")}
            </Link>
          </li>
          <li>
            <Link 
              to="/smart-treasury" 
              className={`Navbar__mobile-menu-link ${location.pathname === '/smart-treasury' ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              {t("menu-2")}
            </Link>
          </li>
          <li>
            <a 
              className={`Navbar__mobile-menu-link ${['/fx-services', '/international-payments', '/legal-control-aml-kyc'].includes(location.pathname) ? 'active' : ''}`} 
              href="#services" 
              onClick={(e) => { handleNavigation(e, 'services'); toggleMenu(); }}
            >
              {t("menu-3")}
            </a>
          </li>
          <li>
            <Link 
              to="/about-us" 
              className={`Navbar__mobile-menu-link ${location.pathname === '/about-us' ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              {t("menu-4")}
            </Link>
          </li>
          <li>
            <Link 
              to="/contact-us" 
              className={`Navbar__mobile-menu-link ${location.pathname === '/contact-us' ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              {t("menu-5")}
            </Link>
          </li>
          <div className="Navbar__column-3--languajeMob">
            <Translation className="Navbar__column-3--languaje-icon" />
          </div>
        </ul>
        <p className='Navbar__copyright'>
          {t("menu-6")}
        </p>
      </div>
    </nav>
  );
};

export default Navbar;