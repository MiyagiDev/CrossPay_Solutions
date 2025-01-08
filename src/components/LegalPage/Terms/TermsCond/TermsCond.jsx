import { useTranslation } from 'react-i18next';
import './termscond.css';

const TermsCond = () => {
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
        <section className='container__terms--main'>
            {/* Sección Términos y Condiciones de Crosspay */}
            <div className='container__terms--section'>
                <div className='container__terms--mainHeader'>
                    <h3><strong>{t("terms.title-1")}</strong></h3>
                    <p>{renderText(t("terms.paragraph-1"))}</p>
                </div>
            </div>
        </section>
    );
};

export default TermsCond;
