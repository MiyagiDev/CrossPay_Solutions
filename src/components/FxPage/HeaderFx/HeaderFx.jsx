import { useTranslation } from 'react-i18next';
import Menu from '../../Navbar/Navbar';
import bgImg from '../../../assets/images/crosspay-solutions-header-bg.webp';
import './headerfx.css';

const HeaderFx = () => {
    const {t} = useTranslation();

    return (
        <section className="container__headerfx--main">
                {/* Imagen insertada con z-index negativo */}
                <img 
                    src={bgImg} 
                    alt="Background" 
                    className="headerfx__background--img" 
                />
            <div className="container__headerfx">
                <Menu />
                <div className="container__headerfx--header">
                    <div className="container__headerfx--text">
                        <h1>
                            {t("fx.headerfx-title-1")}<br></br><span className="highlight-7"> {t("fx.headerfx-title-2")}</span>
                        </h1>
                        <p>
                            {t("fx.headerfx-subtitle")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderFx;