import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HiArrowSmallRight } from "react-icons/hi2";
import arrow from '../../../assets/icons/crosspay-link-arrow.svg'
import servImg from '../../../assets/images/crosspay-solutions-services.webp';
import customerImg from '../../../assets/images/crosspay-empresa-exportadora.webp';
import crosspayImg from '../../../assets/images/crosspay-solutions-customer.webp';
import payments from '../../../assets/icons/crosspay-pagos-internacionales.svg';
import fxservices from '../../../assets/icons/crosspay-foreign-exchange-fx.svg';
import treasury from '../../../assets/icons/crosspay-tesoreria-inteligente.svg';
import amlkyc from '../../../assets/icons/crosspay-aml-kyc.svg';
import opEfficiency from '../../../assets/icons/crosspay-eficiencia-operativa.svg';
import currencyRisk from '../../../assets/icons/crosspay-control-riesgo-cambiario.svg';
import increasyProf from '../../../assets/icons/crosspay-aumento-rentabilidad.svg';
import longRelation from '../../../assets/icons/crosspay-confianza.svg';
import './services.css';

const Services = () => {
    const { t } = useTranslation();

    useEffect(() => {
        // Limpiar el contenedor del widget si ya tiene contenido
        const widgetContainer = document.getElementById('tradingview-widget-container');
        if (widgetContainer) {
            widgetContainer.innerHTML = '';
        }

        // Crear el script dinámicamente
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [
                { description: "EUR-USD", proName: "OANDA:EURUSD" },
                { description: "AUD-USD", proName: "FX:AUDUSD" },
                { description: "GBP-USD", proName: "OANDA:GBPUSD" },
                { description: "USD-COP", proName: "FX_IDC:USDCOP" },
                { description: "EUR-COP", proName: "FX_IDC:EURCOP" },
                { description: "USD-MXN", proName: "CAPITALCOM:USDMXN" },
                { description: "USD-ARS", proName: "FX_IDC:USDARS" },
                { description: "USD-BRL", proName: "PEPPERSTONE:USDBRL" }
            ],
            showSymbolLogo: true,
            isTransparent: true,
            displayMode: "compact",
            colorTheme: "light",
            locale: "es"
        });

        // Insertar el script en el contenedor del widget
        if (widgetContainer) {
            widgetContainer.appendChild(script);
        }
    }, []);

    return (
        <section className='container__services--main'>
            {/* Script para insertar el ticker de TradingView */}
            <div className='container__services--ticker'>
                <p>{t("services-ticker")}</p>
                <div id="tradingview-widget-container">
                    <div className="tradingview-widget-container__widget"></div>
                    <div className="tradingview-widget-copyright"></div>
                </div>
            </div>

            {/* Sección de Servicios Financieros */}
            <div id="services" className='container__services--section'>
                <div className='container__services--header'>
                    <h2>{t("services-title-1")}</h2>
                    <h2><span className="highlight-2">{t("services-title-2")}</span></h2>
                    <p>{t("services-paragraph")}</p>
                </div>
                <div className='container__services--columns'>
                    {/* Columna de la imagen */}
                    <div className='container__services--col1'>
                        <img src={servImg} alt="Simplificando los pagos internacionales. Este hombre de negocios confía en Crosspay para gestionar de manera eficiente los pagos internacionales de su empresa." />
                    </div>
                    {/* Columna de los bullet points */}
                    <div className='container__services--col2'>
                        {/* bullet points de la parte superior */}
                        <div className='container__services'>
                            <div className='container__services--features'>
                                <a href="/international-payments" rel="noopener noreferrer">
                                    <div className='services--features-header'>
                                        <img src={payments} alt="pagos internacionales" />
                                        <div>
                                            <h3>{t("service1-title1")}</h3>
                                            <h4>{t("service1-title2")}</h4>
                                        </div>
                                    </div> 
                                    <div className='container__services--features-link'>
                                        <p>{t("service1-p")}</p>
                                        <img src={arrow} alt="enlace a pagos internacionales" />
                                    </div>
                                </a>
                            </div>
                            <div className='container__services--features'>
                                <a href="/fx-services" rel="noopener noreferrer">
                                    <div className='services--features-header'>
                                        <img src={fxservices} alt="Servicios FX Foreign Exchange" />
                                        <div>
                                            <h3>{t("service2-title1")}</h3>
                                            <h4>{t("service2-title2")}</h4>
                                        </div>
                                    </div>
                                    <div className='container__services--features-link'>
                                        <p>{t("service2-p")} <strong>{t("service2-p2")}</strong> {t("service2-p3")}</p>
                                        <img src={arrow} alt="enlace a servicios fx" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* bullet points de la parte inferior */}
                        <div className='container__services'>
                            <div className='container__services--features'>
                                <a href="/smart-treasury" rel="noopener noreferrer">
                                    <div className='services--features-header'>
                                        <img src={treasury} alt="Tesorería Inteligente" />
                                        <div>
                                            <h3>{t("service3-title1")}</h3>
                                            <h4>{t("service3-title2")}</h4>
                                        </div>
                                    </div> 
                                    <div className='container__services--features-link'>
                                        <p>{t("service3-p")}</p>
                                        <img src={arrow} alt="enlace a tesorería inteligente" />
                                    </div>
                                </a>
                            </div>
                            <div className='container__services--features'>
                                <a href="/legal-control-aml-kyc" rel="noopener noreferrer">
                                    <div className='services--features-header'>
                                        <img src={amlkyc} alt="Control Legal AML/KYC" />
                                        <div>
                                            <h3>{t("service4-title1")}</h3>
                                            <h4>{t("service4-title2")}</h4>
                                        </div>
                                    </div>
                                    <div className='container__services--features-link'>
                                        <p>{t("service4-p")}</p>
                                        <img src={arrow} alt="enlace a control legal aml7kyc" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección del Call to Action */}
            <div className='container__services--cta'>
                <h3>
                    {t("services-cta-1")}
                    <span className="highlight-3">{t("services-cta-2")}</span>
                </h3>
                <a href="#contact">
                    <div className="container__services--cta-button">
                        <h4>{t("services-button-cta")}</h4>
                        <HiArrowSmallRight alt="enlace al formulario de contacto" className="arrow" />
                    </div>
                </a>
            </div>

            {/* Sección de clientes: caso de la Empresa Exportadora */}
            <div className='container__customers--section'>
                <div className='container__customers--mainHeader'>
                    <h2><span className="highlight-2"><strong>{t("customers-title-1")}</strong></span></h2>
                    <h2>{t("customers-title-2")}</h2>
                    <p>{t("customers-paragraph")}</p>
                </div>
                <div className='container__customersPayments--columns'>
                    {/* Columna de la imagen */}
                    <div className='container__customersPayments--col1'>
                        <img src={customerImg} alt="Buque de exportaciones en un puerto simbolizando la conectividad global y la optimización financiera que CrossPay ofrece a empresas para agilizar cobros internacionales y pagos a proveedores locales." />
                    </div>
                    {/* Columna de los bullet points */}
                    <div className='container__customersPayments--col2'>
                        <div className='container__customers'>
                            <div className='container__customersPayments--header'>
                                <h2><span className="highlight-2"><strong>{t("customer-section1-title-1")}</strong></span></h2>
                                <h3>{t("customer-section1-title-2")}</h3>
                                <p>{t("customer-section1-paragraph")}</p>
                            </div>
                            <div className='container__customersPayments--features'>
                                <div className='customersPayments--features-header'>
                                    <h3>{t("customer-section1-bulletTitle-1")}</h3>
                                    <p>{t("customer-section1-bulletParagraph-1")}</p>
                                </div> 
                            </div>
                            <div className='container__customersPayments--features'>
                                <div className='customersPayments--features-header'>
                                    <h3>{t("customer-section1-bulletTitle-2")}</h3>
                                    <p>{t("customer-section1-bulletParagraph-2")}</p>
                                </div> 
                            </div>
                            <div className='container__customersPayments--features'>
                                <div className='customersPayments--features-header'>
                                    <h3>{t("customer-section1-bulletTitle-3")}</h3>
                                    <p>{t("customer-section1-bulletParagraph-3")}</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección La Solución de CrossPay */}
            <div className='container__customers--section'>
                <div className='container__customersCrosspay--columns'>
                    {/* Columna de los bullet points */}
                    <div className='container__customersCrosspay--col2'>
                        <div className='container__customers'>
                            <div className='container__customersCrosspay--header'>
                                <h2><span className="highlight-2"><strong>{t("customer-section2-title-1")}</strong></span></h2>
                                <h3>{t("customer-section2-title-2")}</h3>
                                <p>{t("customer-section2-paragraph")}</p>
                            </div>
                            <div className='container__customersCrosspay--features'>
                                <div className='customersCrosspay--features-header'>
                                    <h3>{t("customer-section2-bulletTitle-1")}</h3>
                                    <p>{t("customer-section2-bulletParagraph-1")}</p>
                                </div> 
                            </div>
                            <div className='container__customersCrosspay--features'>
                                <div className='customersCrosspay--features-header'>
                                    <h3>{t("customer-section2bulletTitle-2")}</h3>
                                    <p>{t("customer-section2-bulletParagraph-2")}</p>
                                </div> 
                            </div>
                            <div className='container__customersCrosspay--features'>
                                <div className='customersCrosspay--features-header'>
                                    <h3>{t("customer-section2-bulletTitle-3")}</h3>
                                    <p>{t("customer-section2-bulletParagraph-3")}</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    {/* Columna de la imagen */}
                    <div className='container__customersCrosspay--col1'>
                        <img src={crosspayImg} alt="Persona utilizando una laptop con el mockup de la app de pagos de CrossPay, representando la facilidad y transparencia en la gestión de transacciones internacionales y locales." />
                    </div>
                </div>
            </div>

            {/* Sección Alianza Crosspay */}
            <div className='container__alliance--section'>
                <div className='container__alliance--mainHeader'>
                    <h2><span className="highlight-2"><strong>{t("customer-section2-title-3")}</strong></span></h2>
                    <h2>{t("customer-section2-title-4")}</h2>
                    <p>{t("customer-section2-paragraph-2")}</p>
                </div>
            </div>
            <div className='container__alliance--bPoints'>
                {/* bullet points de la parte superior */}
                <div className='container__alliance'>
                    <div className='container__alliance--features'>
                        <div className='alliance--features-header'>
                            <img src={opEfficiency} alt="mayor eficiencia operativa" />
                            <h3>{t("alliance1-title")}</h3>
                            <p>{t("alliance1-p")}</p>
                        </div>
                    </div>
                    <div className='container__alliance--features'>
                        <div className='alliance--features-header'>
                            <img src={currencyRisk} alt="control de riesgo cambiario" />
                            <h3>{t("alliance2-title")}</h3>
                            <p>{t("alliance2-p")}</p>
                        </div>
                    </div>
                    <div className='container__alliance--features'>
                        <div className='alliance--features-header'>
                            <img src={increasyProf} alt="aumento de la rentabilidad" />
                            <h3>{t("alliance3-title")}</h3>
                            <p>{t("alliance3-p")}</p>
                        </div>
                    </div>
                    <div className='container__alliance--features'>
                        <div className='alliance--features-header'>
                            <img src={longRelation} alt="confianza y relación a largo plazo" />
                            <h3>{t("alliance4-title")}</h3>
                            <p>{t("alliance4-p")}</p>
                        </div>
                    </div>
                </div>
                <a href="#contact">
                    <div className="container__alliance--cta-button">
                        <h4>{t("alliance-button-cta")}</h4>
                        <HiArrowSmallRight alt="enlace al formulario de contacto" className="arrow" />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Services;
