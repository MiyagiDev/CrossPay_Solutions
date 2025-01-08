import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './form.css';

const Form = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        termsAccepted: false
    });
    const [errors, setErrors] = useState({});

    // Validación del formulario
    const validateForm = () => {
        let formErrors = {};

        // Validación del nombre
        if (!formData.name) formErrors.name = t('form.nameRequired');

        // Validación correo electrónico
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = t('form.emailInvalid');
        }
        
        // Validación del mensaje
        if (!formData.message) formErrors.message = t('form.messageRequired');

        // Validación de aceptación de términos
        if (!formData.termsAccepted) formErrors.termsAccepted = t('form.termsRequired');

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    // Manejo del cambio de los campos del formulario
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData(prevData => ({ ...prevData, [name]: checked }));
        } else {
            setFormData(prevData => ({ ...prevData, [name]: value }));
        }
    };

    // Manejo del envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Formulario enviado', formData);
            // Agregar el código aquí para enviar los datos a la API de Bdatos o Mailchimp
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            {/* Campo de nombre */}
            <div className="input-group">
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength="30"
                    placeholder={t('form.namePlaceholder')}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
            </div>

            {/* Campo de correo */}
            <div className="input-group">
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength="30"
                    placeholder={t('form.emailPlaceholder')}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            {/* Campo de empresa */}
            <div className="input-group">
                <input
                    type="text"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength="100"
                    placeholder={t('form.messagePlaceholder')}
                />
                {errors.message && <div className="error-message">{errors.message}</div>}
            </div>

            {/* Checkbox de aceptación de términos */}
            <div className="checkbox-group">
                <div className="checkbox-acceptance">
                    <div className="checkbox-acceptance-col1">
                        <input
                            type="checkbox"
                            id="terms"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="checkbox-acceptance-col2">
                        <label htmlFor="terms">
                            {t('form.termsText')}
                            <a href="/terms" target="_blank" rel="noopener noreferrer"><strong> {t('form.termsLink')} </strong></a>
                            {t('form.privacyText')}
                            <a href="/privacy" target="_blank" rel="noopener noreferrer"><strong> {t('form.privacyLink')}</strong></a>
                        </label>
                    </div>
                </div>
                <div>
                    {errors.termsAccepted && <div className="error-message">{errors.termsAccepted}</div>}
                </div>
            </div>

            {/* Botón de envío */}
            <button type="submit" className="submit-button">{t('form.submit')}</button>
        </form>
    );
};

export default Form;
