import { useTranslation } from 'react-i18next';
import { HiArrowSmallRight } from "react-icons/hi2";
import verificacion from '../../../assets/icons/crosspay-seguridad-y-confianza.svg';
import cumplimiento from '../../../assets/icons/crosspay-cumplimiento-global.svg';
import prevencion from '../../../assets/icons/crosspay-prevencion-de-riesgos.svg';
import decisiones from '../../../assets/icons/crosspay-mejor-toma-de-decisiones.svg';
import './amlkyc.css';

const AMLKYC = () => {
    const { t } = useTranslation();

    return (
        <section className='container__amlkyc--main'>
            {/* Sección Alianza Crosspay */}
            <div className='container__amlkyc--section'>
                <div className='container__amlkyc--mainHeader'>
                    <h2><strong>{t("compliance.amlkyc-title-1")}</strong></h2>
                    <p>{t("compliance.amlkyc-paragraph")}</p>
                    <h3>{t("compliance.amlkyc-title-2")}</h3>
                </div>
            </div>
            <div className='container__amlkyc--bPoints'>
                {/* bullet points de la sección */}
                <div className='container__amlkyc'>
                    <div className='container__amlkyc--features'>
                        <div className='amlkyc--features-header'>
                            <img src={verificacion} alt="rapidez y eficiencia" />
                            <h3>{t("compliance.benefits-title-1")}</h3>
                            <p>{t("compliance.benefits-p-1")}</p>
                        </div>
                    </div>
                    <div className='container__amlkyc--features'>
                        <div className='amlkyc--features-header'>
                            <img src={cumplimiento} alt="transparencia total" />
                            <h3>{t("compliance.benefits-title-2")}</h3>
                            <p>{t("compliance.benefits-p-2")}</p>
                        </div>
                    </div>
                    <div className='container__amlkyc--features'>
                        <div className='amlkyc--features-header'>
                            <img src={prevencion} alt="cumplimiento normativo" />
                            <h3>{t("compliance.benefits-title-3")}</h3>
                            <p>{t("compliance.benefits-p-3")}</p>
                        </div>
                    </div>
                    <div className='container__amlkyc--features'>
                        <div className='amlkyc--features-header'>
                            <img src={decisiones} alt="escalabilidad global" />
                            <h3>{t("compliance.benefits-title-4")}</h3>
                            <p>{t("compliance.benefits-p-4")}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sección del Call to Action */}
            <div className='container__amlkyc--cta'>
                <h3>
                    {t("compliance.cta-1")}
                    <span className="highlight-10"> {t("compliance.cta-2")}</span>
                </h3>
                <a href="/contact-us">
                    <div className="container__amlkyc--cta-button">
                        <h4>{t("compliance.button-cta")}</h4>
                        <HiArrowSmallRight alt="enlace al formulario de contacto" className="arrow" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default AMLKYC;
