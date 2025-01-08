import { useTranslation } from 'react-i18next';
import Menu from '../../../Navbar/Navbar';
import bgImg from '../../../../assets/images/crosspay-solutions-header-bg.webp';
import './headerterms.css';

const HeaderTerms = () => {
    const {t} = useTranslation();

    return (
        <section className="container__headerterms--main">
                {/* Imagen insertada con z-index negativo */}
                <img 
                    src={bgImg} 
                    alt="Background" 
                    className="headerterms__background--img" 
                />
            <div className="container__headerterms">
                <Menu />
                <div className="container__headerterms--header">
                    <div className="container__headerterms--text">
                        <h1>
                        <span className="highlight-15">{t("terms.header-title")}</span>
                        </h1>
                        <p>
                            {t("terms.header-subtitle")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderTerms;