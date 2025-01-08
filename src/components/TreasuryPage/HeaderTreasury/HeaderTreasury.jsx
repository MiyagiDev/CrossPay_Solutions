import { useTranslation } from 'react-i18next';
import Menu from '../../Navbar/Navbar';
import bgImg from '../../../assets/images/crosspay-solutions-header-bg.webp';
import './headertreasury.css';

const HeaderTreasury = () => {
    const {t} = useTranslation();

    return (
        <section className="container__headertreasury--main">
                {/* Imagen insertada con z-index negativo */}
                <img 
                    src={bgImg} 
                    alt="Background" 
                    className="headertreasury__background--img" 
                />
            <div className="container__headertreasury">
                <Menu />
                <div className="container__headertreasury--header">
                    <div className="container__headertreasury--text">
                        <h1>
                            {t("treasury.headertreasury-title1")}<span className="highlight-5"> {t("treasury.headertreasury-title2")}</span>
                        </h1>
                        <p>
                            {t("treasury.headertreasury-subtitle")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderTreasury;