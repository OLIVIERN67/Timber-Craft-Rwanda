import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { contactInfo } from '../data';
import usePageMeta from '../hooks/usePageMeta';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactPage = () => {
  const { t } = useTranslation();
  usePageMeta('meta.contact.title', 'meta.contact.description');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the visitor starts fixing it.
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'contactPage.form.errors.nameRequired';
    if (!formData.email.trim()) {
      nextErrors.email = 'contactPage.form.errors.emailRequired';
    } else if (!EMAIL_RE.test(formData.email.trim())) {
      nextErrors.email = 'contactPage.form.errors.emailInvalid';
    }
    if (!formData.message.trim()) nextErrors.message = 'contactPage.form.errors.messageRequired';
    return nextErrors;
  };

  // No backend to send this to — this is a static, frontend-only site.
  // Submitting opens the visitor's own email client with the message
  // pre-filled, addressed to the business email above. Nothing is sent
  // over the network and no data is stored anywhere. Validation is fully
  // custom (form has noValidate) so error messages always follow the
  // visitor's selected language instead of the browser's own locale.
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    const subject = encodeURIComponent(`New inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

    setErrors({});
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const fieldClass = (field) =>
    `input input-bordered w-full focus:outline-timbercraft-green ${errors[field] ? 'input-error' : ''}`;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-padding">
        <div className="container-custom">
          <h1 className="section-title">{t('contactPage.title')}</h1>
          <p className="section-subtitle">{t('contactPage.subtitle')}</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-timbercraft-cream rounded-2xl p-8 border border-black/5">
                <h2 className="text-2xl font-display font-semibold text-timbercraft-dark mb-6">
                  {t('contactPage.getInTouch')}
                </h2>

                <div className="space-y-5">
                  {contactInfo.address && (
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 shrink-0 rounded-full bg-timbercraft-green/10 flex items-center justify-center text-timbercraft-green">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-timbercraft-dark">{t('contactPage.addressLabel')}</p>
                        <p className="text-gray-600">{contactInfo.address}</p>
                      </div>
                    </div>
                  )}
                  {contactInfo.phone && (
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 shrink-0 rounded-full bg-timbercraft-green/10 flex items-center justify-center text-timbercraft-green">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-timbercraft-dark">{t('contactPage.phoneLabel')}</p>
                        <p className="text-gray-600">{contactInfo.phone}</p>
                      </div>
                    </div>
                  )}
                  {contactInfo.email && (
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 shrink-0 rounded-full bg-timbercraft-green/10 flex items-center justify-center text-timbercraft-green">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-timbercraft-dark">{t('contactPage.emailLabel')}</p>
                        <p className="text-gray-600">{contactInfo.email}</p>
                      </div>
                    </div>
                  )}
                  {contactInfo.hours && (
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 shrink-0 rounded-full bg-timbercraft-green/10 flex items-center justify-center text-timbercraft-green">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-timbercraft-dark">{t('contactPage.hoursLabel')}</p>
                        <p className="text-gray-600">{contactInfo.hours}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-black/5">
                <h2 className="text-2xl font-display font-semibold text-timbercraft-dark mb-6">
                  {t('contactPage.form.heading')}
                </h2>

                {submitted && (
                  <div role="alert" className="alert alert-success mb-6">
                    <CheckCircle2 size={18} />
                    <span>{t('contactPage.form.successMessage')}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="form-control">
                    <label htmlFor="name" className="label">
                      <span className="label-text font-medium">{t('contactPage.form.nameLabel')} *</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={fieldClass('name')}
                      placeholder={t('contactPage.form.namePlaceholder')}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-error text-sm mt-1.5 flex items-center gap-1.5">
                        <AlertCircle size={14} /> {t(errors.name)}
                      </p>
                    )}
                  </div>

                  <div className="form-control">
                    <label htmlFor="email" className="label">
                      <span className="label-text font-medium">{t('contactPage.form.emailLabel')} *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={fieldClass('email')}
                      placeholder={t('contactPage.form.emailPlaceholder')}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-error text-sm mt-1.5 flex items-center gap-1.5">
                        <AlertCircle size={14} /> {t(errors.email)}
                      </p>
                    )}
                  </div>

                  <div className="form-control">
                    <label htmlFor="phone" className="label">
                      <span className="label-text font-medium">{t('contactPage.form.phoneLabel')}</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input input-bordered w-full focus:outline-timbercraft-green"
                      placeholder={t('contactPage.form.phonePlaceholder')}
                    />
                  </div>

                  <div className="form-control">
                    <label htmlFor="message" className="label">
                      <span className="label-text font-medium">{t('contactPage.form.messageLabel')} *</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      rows="4"
                      className={`textarea textarea-bordered w-full focus:outline-timbercraft-green resize-none ${errors.message ? 'textarea-error' : ''}`}
                      placeholder={t('contactPage.form.messagePlaceholder')}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-error text-sm mt-1.5 flex items-center gap-1.5">
                        <AlertCircle size={14} /> {t(errors.message)}
                      </p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    {t('contactPage.form.submit')}
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    {t('contactPage.form.disclaimer')}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
