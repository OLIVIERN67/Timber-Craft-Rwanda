import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { contactInfo } from '../data';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ submitted: false, message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // No backend to send this to — this is a static, frontend-only site.
  // Submitting opens the visitor's own email client with the message
  // pre-filled, addressed to the business email above. Nothing is sent
  // over the network and no data is stored anywhere.
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

    setFormStatus({
      submitted: true,
      message: 'Your email app should now open with your message ready to send.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-padding">
        <div className="container-custom">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">Get in touch with us for inquiries, quotes, or any questions</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-timbercraft-cream rounded-2xl p-8 border border-black/5">
                <h2 className="text-2xl font-display font-semibold text-timbercraft-dark mb-6">Get in Touch</h2>

                <div className="space-y-5">
                  {contactInfo.address && (
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 shrink-0 rounded-full bg-timbercraft-green/10 flex items-center justify-center text-timbercraft-green">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-timbercraft-dark">Address</p>
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
                        <p className="font-semibold text-timbercraft-dark">Phone</p>
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
                        <p className="font-semibold text-timbercraft-dark">Email</p>
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
                        <p className="font-semibold text-timbercraft-dark">Working Hours</p>
                        <p className="text-gray-600">{contactInfo.hours}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-black/5">
                <h2 className="text-2xl font-display font-semibold text-timbercraft-dark mb-6">Send Us a Message</h2>

                {formStatus.submitted && (
                  <div role="alert" className="alert alert-success mb-6">
                    <CheckCircle2 size={18} />
                    <span>{formStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="form-control">
                    <label htmlFor="name" className="label">
                      <span className="label-text font-medium">Your Name *</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input input-bordered w-full focus:outline-timbercraft-green"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-control">
                    <label htmlFor="email" className="label">
                      <span className="label-text font-medium">Email Address *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input input-bordered w-full focus:outline-timbercraft-green"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-control">
                    <label htmlFor="phone" className="label">
                      <span className="label-text font-medium">Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input input-bordered w-full focus:outline-timbercraft-green"
                      placeholder="+250 788 000 000"
                    />
                  </div>

                  <div className="form-control">
                    <label htmlFor="message" className="label">
                      <span className="label-text font-medium">Message *</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="textarea textarea-bordered w-full focus:outline-timbercraft-green resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    Opens your email app with this message pre-filled — no data is sent to or stored on any server.
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
