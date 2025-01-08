import { useTranslation } from 'react-i18next';
import Menu from '../../../Navbar/Navbar';
import bgImg from '../../../../assets/images/crosspay-solutions-header-bg.webp';
import './headerprivacy.css';

const HeaderPrivacy = () => {
    const {t} = useTranslation();

    return (
        <section className="container__headerprivacy--main">
                {/* Imagen insertada con z-index negativo */}
                <img 
                    src={bgImg} 
                    alt="Background" 
                    className="headerprivacy__background--img" 
                />
            <div className="container__headerprivacy">
                <Menu />
                <div className="container__headerprivacy--header">
                    <div className="container__headerprivacy--text">
                        <h1>
                        <span className="highlight-16">{t("privacy.header-title")}</span>
                        </h1>
                        <p>
                            {t("privacy.header-subtitle")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderPrivacy;