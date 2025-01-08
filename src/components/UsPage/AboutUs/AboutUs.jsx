import { useTranslation } from 'react-i18next';
import { HiArrowSmallRight } from "react-icons/hi2";
import integridad from '../../../assets/icons/crosspay-integridad-y-transparencia.svg';
import innovacion from '../../../assets/icons/crosspay-innovacion-y-excelencia.svg';
import sostenibilidad from '../../../assets/icons/crosspay-responsabilidad-social-y-sostenibilidad.svg';
import respeto from '../../../assets/icons/crosspay-respeto-y-servicio-humano.svg';
import etica from '../../../assets/icons/crosspay-vision-global.svg';
import './aboutus.css';

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <section className='container__aboutus--main'>
            {/* Sección Alianza Crosspay */}
            <div className='container__aboutus--section'>
                <div className='container__aboutus--mainHeader'>
                    <h2><strong>{t("us.us-subtitle-2")}</strong></h2>
                    <p>{t("us.us-paragraph-2")}</p>
                    <h2><strong>{t("us.us-subtitle-3")}</strong></h2>
                    <p>{t("us.us-paragraph-3")}</p>
                    <h2><strong>{t("us.us-subtitle-4")}</strong></h2>
                </div>
            </div>
            <div className='container__aboutus--bPoints'>
                {/* bullet points de la primera fila */}
                <div className='container__aboutus'>
                    <div className='container__aboutus--features'>
                        <div className='aboutus--features-header'>
                            <img src={integridad} alt="Integridad y Transparencia" />
                            <h3>{t("us.values-title-1")}</h3>
                            <p>{t("us.values-p-1")}</p>
                        </div>
                    </div>
                    <div className='container__aboutus--features'>
                        <div className='aboutus--features-header'>
                            <img src={innovacion} alt="Innovación y Excelencia" />
                            <h3>{t("us.values-title-2")}</h3>
                            <p>{t("us.values-p-2")}</p>
                        </div>
                    </div>
                    <div className='container__aboutus--features'>
                        <div className='aboutus--features-header'>
                            <img src={respeto} alt="Responsabilidad Social y Sostenibilidad" />
                            <h3>{t("us.values-title-4")}</h3>
                            <p>{t("us.values-p-4")}</p>
                        </div>
                    </div>
                </div>
                {/* bullet points de la segunda fila */}
                <div className='container__aboutus'>
                    <div className='container__aboutus--features'>
                        <div className='aboutus--features-header'>
                            <img src={sostenibilidad} alt="Respeto y Servicio Humano" />
                            <h3>{t("us.values-title-3")}</h3>
                            <p>{t("us.values-p-3")}</p>
                        </div>
                    </div>
                    <div className='container__aboutus--features'>
                        <div className='aboutus--features-header'>
                            <img src={etica} alt="Visión Global con Ética Empresarial" />
                            <h3>{t("us.values-title-5")}</h3>
                            <p>{t("us.values-p-5")}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sección del Call to Action */}
            <div className='container__aboutus--cta'>
                <h3>
                    {t("us.cta-1")}
                    <span className="highlight-14"> {t("us.cta-2")}</span>
                </h3>
                <a href="/contact-us">
                    <div className="container__aboutus--cta-button">
                        <h4>{t("us.button-cta")}</h4>
                        <HiArrowSmallRight alt="enlace al formulario de contacto" className="arrow" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default AboutUs;
