import { useTranslation } from 'react-i18next';
import { HiArrowSmallRight } from "react-icons/hi2";
import Menu from '../../Navbar/Navbar';
import bgImg from '../../../assets/images/crosspay-solutions-header-bg.webp';
import appMockup from '../../../assets/images/crosspay-solutions-mockup-application.webp';
import './header.css';

const Header = () => {
    const {t} = useTranslation();

    return (
        <section className="container__header--main">
                {/* Imagen insertada con z-index negativo */}
                <img 
                    src={bgImg} 
                    alt="Background" 
                    className="header__background--img" 
                />
            <div className="container__header">
                <Menu />
                <div className="container__appVersion">
                    <div className="container__appVersion--button">
                        <h5>{t("header_button-1")}</h5>
                    </div>
                    <div className="container__appVersion--text">
                        <h1>
                            {t("header_title1")} <br/>
                            <span className="highlight-1"><strong>{t("header_title2")}</strong></span>
                        </h1>
                        <p>
                            {t("header_subtitle")}
                        </p>
                    </div>
                    {/* botón que direcciona al formulario de contacto */}
                    <a href="#contact">
                        <div className="container__appVersion--cta">
                            <h4>{t("header_button-cta")}</h4>
                            <HiArrowSmallRight alt="Icono idioma" className="arrow" />
                        </div>
                    </a>
                    <img 
                        src={appMockup} 
                        alt="Mockup App Crosspay Solutions" 
                        className="container__appVersion--mockup" 
                    />
                </div>
            </div>
        </section>
    )
}

export default Header;