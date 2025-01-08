import { Link, useLocation } from 'react-router-dom'; // Asegúrate de importar useLocation
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Translation from '../Translation/Translation';
import crosspayLogo from '../../assets/logos/crosspay-solutions-logo.svg';
import './navbar.css';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const location = useLocation(); // Obtiene la ubicación actual
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
      </div>
    </nav>
  );
};

export default Navbar;


/* import { Link, useLocation } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Translation from '../Translation/Translation';
import crosspayLogo from '../../assets/logos/crosspay-solutions-logo.svg';
import './navbar.css';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const handleNavigation = (e, target) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      // Si no estamos en el home, redirigir al home y luego desplazarnos
      window.location.href = `/#${target}`;
    } else {
      // Si ya estamos en el home, simplemente desplazarnos
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
              <Link to="/" className="Navbar__column-2--menu-link">{t("menu-1")}</Link>
            </li>
            <li>
              <Link to="/smart-treasury" className="Navbar__column-2--menu-link">{t("menu-2")}</Link>
            </li>
            <li>
              <a className="Navbar__column-2--menu-link" href="#services" onClick={(e) => handleNavigation(e, 'services')}>
                {t("menu-3")}
              </a>
            </li>
            <li>
              <Link to="/about-us" className="Navbar__column-2--menu-link">{t("menu-4")}</Link>
            </li>
            <li>
              <Link to="/contact-us" className="Navbar__column-2--menu-link">{t("menu-5")}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="Navbar__column-3">
        <div className="Navbar__column-3--languaje">
          <Translation className="Navbar__column-3--languaje-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; */