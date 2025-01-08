import { useTranslation } from 'react-i18next';
import { HiArrowSmallRight } from "react-icons/hi2";
import riesgo from '../../../assets/icons/crosspay-reduccion-del-riesgo-cambiario.svg';
import precision from '../../../assets/icons/crosspay-precision-financiera.svg';
import eficienciafx from '../../../assets/icons/crosspay-eficiencia-operativa-fx.svg';
import asesoria from '../../../assets/icons/crosspay-asesoria-especializada.svg';
import exporters from '../../../assets/images/crosspay-solutions-para-exportadorese-importadores.webp';
import './servicesfx.css';

const ServicesFx = () => {
    const { t } = useTranslation();

    return (
        <section className='container__servicesfx--main'>
            {/* Sección Alianza Crosspay */}
            <div className='container__servicesfx--section'>
                <div className='container__servicesfx--mainHeader'>
                    <h2><strong>{t("fx.servicesfx-title-1")}</strong></h2>
                    <p>{t("fx.servicesfx-paragraph")}</p>
                    <h3>{t("fx.servicesfx-title-2")}</h3>
                </div>
            </div>
            <div className='container__servicesfx--bPoints'>
                {/* bullet points de la sección */}
                <div className='container__servicesfx'>
                    <div className='container__servicesfx--features'>
                        <div className='servicesfx--features-header'>
                            <img src={riesgo} alt="reducción del riesgo cambiario" />
                            <h3>{t("fx.benefits-title-1")}</h3>
                            <p>{t("fx.benefits-p-1")}</p>
                        </div>
                    </div>
                    <div className='container__servicesfx--features'>
                        <div className='servicesfx--features-header'>
                            <img src={precision} alt="mayor precisión financiera" />
                            <h3>{t("fx.benefits-title-2")}</h3>
                            <p>{t("fx.benefits-p-2")}</p>
                        </div>
                    </div>
                    <div className='container__servicesfx--features'>
                        <div className='servicesfx--features-header'>
                            <img src={eficienciafx} alt="eficiencia operativa" />
                            <h3>{t("fx.benefits-title-3")}</h3>
                            <p>{t("fx.benefits-p-3")}</p>
                        </div>
                    </div>
                    <div className='container__servicesfx--features'>
                        <div className='servicesfx--features-header'>
                            <img src={asesoria} alt="asesoría especializada" />
                            <h3>{t("fx.benefits-title-4")}</h3>
                            <p>{t("fx.benefits-p-4")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección Beneficios para Exportadores */}
            <div className='container__exporters--columns'>
                {/* Columna de la imagen */}
                <div className='container__exporters--col1'>
                    <img src={exporters} alt="Buque de exportaciones en un puerto simbolizando la conectividad global y la optimización financiera que CrossPay ofrece a empresas para agilizar cobros internacionales y pagos a proveedores locales." />
                </div>
                {/* Columna de los bullet points */}
                <div className='container__exporters--col2'>
                    <div className='container__exporters'>
                        <div className='container__exporters--header'>
                            <h2><span className="highlight-2"><strong>{t("fx.exporters-section1-title-1")}</strong></span></h2>
                            <h3>{t("fx.exporters-section1-title-2")}</h3>
                            <p>{t("fx.exporters-section1-paragraph")}</p>
                        </div>
                        <div className='container__exporters--features'>
                            <div className='exporters--features-header'>
                                <h3>{t("fx.exporters-section1-bulletTitle-1")}</h3>
                                <p>{t("fx.exporters-section1-bulletParagraph-1")}</p>
                            </div> 
                        </div>
                        <div className='container__exporters--features'>
                            <div className='exporters--features-header'>
                                <h3>{t("fx.exporters-section1-bulletTitle-2")}</h3>
                                <p>{t("fx.exporters-section1-bulletParagraph-2")}</p>
                            </div> 
                        </div>
                        <div className='container__exporters--features'>
                            <div className='exporters--features-header'>
                                <h3>{t("fx.exporters-section1-bulletTitle-3")}</h3>
                                <p>{t("fx.exporters-section1-bulletParagraph-3")}</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección del Call to Action */}
            <div className='container__servicesfx--cta'>
                <h3>
                    {t("fx.cta-1")}
                    <span className="highlight-8"> {t("fx.cta-2")}</span>
                </h3>
                <a href="/contact-us">
                    <div className="container__servicesfx--cta-button">
                        <h4>{t("fx.button-cta")}</h4>
                        <HiArrowSmallRight alt="enlace al formulario de contacto" className="arrow" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default ServicesFx;
