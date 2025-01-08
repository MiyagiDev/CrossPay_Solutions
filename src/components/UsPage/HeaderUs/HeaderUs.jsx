import { useTranslation } from 'react-i18next';
import Menu from '../../Navbar/Navbar';
import bgImg from '../../../assets/images/crosspay-solutions-header-bg.webp';
import './headerus.css';

const HeaderUs = () => {
    const {t} = useTranslation();

    return (
        <section className="container__headerus--main">
                {/* Imagen insertada con z-index negativo */}
                <img 
                    src={bgImg} 
                    alt="Background" 
                    className="headerus__background--img" 
                />
            <div className="container__headerus">
                <Menu />
                <div className="container__headerus--header">
                    <div className="container__headerus--text">
                        <h1>
                            {t("us.us-title-1")}<br></br>
                            <span className="highlight-13"> {t("us.us-subtitle-1")}</span>
                        </h1>
                        <p>
                            {t("us.us-paragraph-1")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderUs;