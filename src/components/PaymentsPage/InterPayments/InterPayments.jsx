import { useTranslation } from 'react-i18next';
import { HiArrowSmallRight } from "react-icons/hi2";
import rapidez from '../../../assets/icons/crosspay-rapidez-y-eficiencia.svg';
import transptotal from '../../../assets/icons/crosspay-transparencia-total.svg';
import cumplimiento from '../../../assets/icons/crosspay-cumplimiento-normativo.svg';
import escalabilidad from '../../../assets/icons/crosspay-escalabilidad-global.svg';
import './interpayments.css';

const InterPayments = () => {
    const { t } = useTranslation();

    return (
        <section className='container__interpayments--main'>
            {/* Sección Alianza Crosspay */}
            <div className='container__interpayments--section'>
                <div className='container__interpayments--mainHeader'>
                    <h2><strong>{t("payments.interpayments-title-1")}</strong></h2>
                    <p>{t("payments.interpayments-paragraph")}</p>
                    <h3>{t("payments.interpayments-title-2")}</h3>
                </div>
            </div>
            <div className='container__interpayments--bPoints'>
                {/* bullet points de la sección */}
                <div className='container__interpayments'>
                    <div className='container__interpayments--features'>
                        <div className='interpayments--features-header'>
                            <img src={rapidez} alt="rapidez y eficiencia" />
                            <h3>{t("payments.benefits-title-1")}</h3>
                            <p>{t("payments.benefits-p-1")}</p>
                        </div>
                    </div>
                    <div className='container__interpayments--features'>
                        <div className='interpayments--features-header'>
                            <img src={transptotal} alt="transparencia total" />
                            <h3>{t("payments.benefits-title-2")}</h3>
                            <p>{t("payments.benefits-p-2")}</p>
                        </div>
                    </div>
                    <div className='container__interpayments--features'>
                        <div className='interpayments--features-header'>
                            <img src={cumplimiento} alt="cumplimiento normativo" />
                            <h3>{t("payments.benefits-title-3")}</h3>
                            <p>{t("payments.benefits-p-3")}</p>
                        </div>
                    </div>
                    <div className='container__interpayments--features'>
                        <div className='interpayments--features-header'>
                            <img src={escalabilidad} alt="escalabilidad global" />
                            <h3>{t("payments.benefits-title-4")}</h3>
                            <p>{t("payments.benefits-p-4")}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sección del Call to Action */}
            <div className='container__interpayments--cta'>
                <h3>
                    {t("payments.cta-1")}
                    <span className="highlight-6"> {t("payments.cta-2")}</span>
                </h3>
                <a href="/contact-us">
                    <div className="container__interpayments--cta-button">
                        <h4>{t("payments.button-cta")}</h4>
                        <HiArrowSmallRight alt="enlace al formulario de contacto" className="arrow" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default InterPayments;
