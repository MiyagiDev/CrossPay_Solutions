import React from 'react';
import { useTranslation } from 'react-i18next';
import footerLogo from '../../assets/logos/crosspay-solutions-logo.svg';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import './footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            {/* Logo section */}
            <div className="footer--logo">
                <a href="/" aria-label={t('Home')}>
                    <img
                        src={footerLogo}
                        alt='Logo CrossPay Solutions'
                    />
                </a>
            </div>

            {/* Links section */}
            <div className="footer--links">
                {/* Column 1 */}
                <div className="footer__links--col1">
                    <p>
                        {t('footer.paragraph')}
                    </p>
                </div>

                {/* Column 2 */}
                <div className="footer__links--col2">
                    <h4>{t('footer.title-1')}</h4>
                    <a href="/fx-services" rel="noopener noreferrer">{t('footer.link-1')}</a>
                    <a href="/smart-treasury" rel="noopener noreferrer">{t('footer.link-2')}</a>
                    <a href="/international-payments" rel="noopener noreferrer">{t('footer.link-3')}</a>
                </div>

                {/* Column 3 */}
                <div className="footer__links--col3">
                    <h4>{t('footer.title-2')}</h4>
                    <a href="/legal-control-aml-kyc" rel="noopener noreferrer">{t('footer.link-4')}</a>
                    <a href="/privacy-policy" rel="noopener noreferrer">{t('footer.link-5')}</a>
                    <a href="/terms-and-conditions" rel="noopener noreferrer">{t('footer.link-6')}</a>
                </div>
            </div>

            {/* Social media and copyright section */}
            <div className="footer--rrssCopy">
                {/* Social media icons */}
                <div className="footer__rrss">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaXTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram /> 
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </a>
                </div>

                {/* Copyright text */}
                <div className="footer__copy">
                    <p>
                        © 2025 <a href="/" aria-label={t('Home')}><strong>CrossPay Solutions</strong></a>. {t('Todos los derechos reservados.')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
