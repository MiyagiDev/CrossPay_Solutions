import { useTranslation } from 'react-i18next';
import Menu from '../../Navbar/Navbar';
import bgImg from '../../../assets/images/crosspay-solutions-header-bg.webp';
import './headerpayments.css';

const HeaderPayments = () => {
    const {t} = useTranslation();

    return (
        <section className="container__headerpayments--main">
                {/* Imagen insertada con z-index negativo */}
                <img 
                    src={bgImg} 
                    alt="Background" 
                    className="headerpayments__background--img" 
                />
            <div className="container__headerpayments">
                <Menu />
                <div className="container__headerpayments--header">
                    <div className="container__headerpayments--text">
                        <h1>
                            {t("payments.headerpayments-title-1")}<span className="highlight-5"> {t("payments.headerpayments-title-2")}</span>
                        </h1>
                        <p>
                            {t("payments.headerpayments-subtitle")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderPayments;