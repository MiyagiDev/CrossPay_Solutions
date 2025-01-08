import { useTranslation } from 'react-i18next';
import Menu from '../Navbar/Navbar';
import bgImg from '../../assets/images/crosspay-solutions-header-bg.webp';
import ContactForm from '../Home/Form/Form';
import './contactpage.css';

const ContactPage = () => {
    const {t} = useTranslation();

    return (
        <section className="container__contactpage--main">
            {/* Imagen insertada con z-index negativo */}
            <img 
                src={bgImg} 
                alt="Background" 
                className="contactpage__background--img" 
            />
            <div className="container__contactpage">
                <Menu />
                <div className="container__contactpage--header">
                    <div className="container__contactpage--text">
                        <h1>
                        <span className="highlight-11">{t("contactpage.title-1")}</span> {t("contactpage.title-2")}
                        </h1>
                        <p>
                            {t("contactpage.title-3")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="container__contactform--main">
                <div className="container__contactform">
                    <div className="container__contactform--col1">
                        <h2>
                            {t("contactpage.title-4")}
                            <span className="highlight-12"><strong> {t("contactpage.title-5")}</strong></span>
                        </h2>
                        <p>
                            {t("contactpage.paragraph")}
                        </p>
                    </div>
                    <div className="container__contactform--col2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPage;