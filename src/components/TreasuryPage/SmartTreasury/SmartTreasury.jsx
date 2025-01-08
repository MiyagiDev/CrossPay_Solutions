import { useTranslation } from 'react-i18next';
import { HiArrowSmallRight } from "react-icons/hi2";
import liquidity from '../../../assets/icons/crosspay-optimizacion-de-liquidez.svg';
import strategy from '../../../assets/icons/crosspay-agilidad-estrategica.svg';
import control from '../../../assets/icons/crosspay-control-y-transparencia.svg';
import risk from '../../../assets/icons/crosspay-riesgo-cambiario.svg';
import './smarttreasury.css';

const SmartTreasury = () => {
    const { t } = useTranslation();

    return (
        <section className='container__smarttreasury--main'>
            {/* Sección Alianza Crosspay */}
            <div className='container__smarttreasury--section'>
                <div className='container__smarttreasury--mainHeader'>
                    <h2><strong>{t("treasury.smarttreasury-title-1")}</strong></h2>
                    <p>{t("treasury.smarttreasury-paragraph")}</p>
                    <h3>{t("treasury.smarttreasury-title-2")}</h3>
                </div>
            </div>
            <div className='container__smarttreasury--bPoints'>
                {/* bullet points de la sección */}
                <div className='container__smarttreasury'>
                    <div className='container__smarttreasury--features'>
                        <div className='smarttreasury--features-header'>
                            <img src={liquidity} alt="optimización de liquidez" />
                            <h3>{t("treasury.benefits-title-1")}</h3>
                            <p>{t("treasury.benefits-p-1")}</p>
                        </div>
                    </div>
                    <div className='container__smarttreasury--features'>
                        <div className='smarttreasury--features-header'>
                            <img src={control} alt="control y transparencia" />
                            <h3>{t("treasury.benefits-title-2")}</h3>
                            <p>{t("treasury.benefits-p-2")}</p>
                        </div>
                    </div>
                    <div className='container__smarttreasury--features'>
                        <div className='smarttreasury--features-header'>
                            <img src={risk} alt="reducción de riesgos cambiarios" />
                            <h3>{t("treasury.benefits-title-3")}</h3>
                            <p>{t("treasury.benefits-p-3")}</p>
                        </div>
                    </div>
                    <div className='container__smarttreasury--features'>
                        <div className='smarttreasury--features-header'>
                            <img src={strategy} alt="agilidad estratégica" />
                            <h3>{t("treasury.benefits-title-4")}</h3>
                            <p>{t("treasury.benefits-p-4")}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sección del Call to Action */}
            <div className='container__smarttreasury--cta'>
                <h3>
                    {t("treasury.cta-1")}
                    <span className="highlight-6"> {t("treasury.cta-2")}</span>
                </h3>
                <a href="/contact-us">
                    <div className="container__smarttreasury--cta-button">
                        <h4>{t("treasury.button-cta")}</h4>
                        <HiArrowSmallRight alt="enlace al formulario de contacto" className="arrow" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default SmartTreasury;
