import { useTranslation } from 'react-i18next';
import bgImg from '../../../assets/images/crosspay-solutions-header-bg.webp';
import ContactForm from '../Form/Form';
import './contact.css';

const Contact = () => {
    const {t} = useTranslation();

    return (
        <section id="contact" className="container__contact--main">
            {/* Imagen insertada con z-index negativo */}
            <img 
                src={bgImg} 
                alt="Background" 
                className="contact__background--img" 
            />
            <div className="container__contact">
                <div className="container__contact--col1">
                    <h2>
                        {t("contact-title-1")}
                        <span className="highlight-4"><strong> {t("contact-title-2")}</strong></span>
                    </h2>
                    <p>
                        {t("contact-paragraph")}
                    </p>
                </div>
                <div className="container__contact--col2">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact