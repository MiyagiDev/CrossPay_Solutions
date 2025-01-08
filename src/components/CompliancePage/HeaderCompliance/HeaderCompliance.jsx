import { useTranslation } from 'react-i18next';
import Menu from '../../Navbar/Navbar';
import bgImg from '../../../assets/images/crosspay-solutions-header-bg.webp';
import './headercompliance.css';

const HeaderCompliance = () => {
    const {t} = useTranslation();

    return (
        <section className="container__headercompliance--main">
                {/* Imagen insertada con z-index negativo */}
                <img 
                    src={bgImg} 
                    alt="Background" 
                    className="headercompliance__background--img" 
                />
            <div className="container__headercompliance">
                <Menu />
                <div className="container__headercompliance--header">
                    <div className="container__headercompliance--text">
                        <h1>
                            {t("compliance.compliance-title-1")}<br></br><span className="highlight-9">{t("compliance.compliance-title-2")}</span>
                        </h1>
                        <p>
                            {t("compliance.compliance-subtitle")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderCompliance;