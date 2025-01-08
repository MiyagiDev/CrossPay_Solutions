import { useTranslation } from 'react-i18next';
import './privacypol.css';

const PrivacyPol = () => {
    const { t } = useTranslation();

    /* Se procesa el texto insertado en el Json para hacer que tome <br> como salto de línea */
    function renderText(text) {
        return text.split('<br>').map((line, index) => (
            <span key={index}>
                {line}
                {index < text.split('<br>').length - 1 && <br />}
            </span>
        ));
    }

    return (
        <section className='container__privacy--main'>
            {/* Sección Términos y Condiciones de Crosspay */}
            <div className='container__privacy--section'>
                <div className='container__privacy--mainHeader'>
                    <h3><strong>{t("privacy.title-1")}</strong></h3>
                    <p>{renderText(t("privacy.paragraph-1"))}</p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPol;
