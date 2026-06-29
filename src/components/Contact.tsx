import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, MapPin, Mail, Phone } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Stop submission if reCAPTCHA is not completed
    if (!captchaToken) {
      alert("Please check the 'I am not a robot' box!");
      return;
    }

    setLoading(true);

    try {
      // 🚨 PASTE YOUR COPIED LINK RIGHT HERE 🚨
      const API_URL = 'https://script.google.com/macros/s/AKfycbxml5clHUfsHFCWAFKjPIZYYEY0YuTCR7mNQR06_MyD3JS6HIDvY4K9eMKlZ7PVm2XqqQ/exec';

      // Send the data AND the captcha token to your Google Apps Script
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', 
        },
        body: JSON.stringify({ ...formData, recaptchaToken: captchaToken }),
      });

      const result = await response.json();

      if (result.status === 'success') {
        console.log('Lead submitted successfully to Google Sheets!');
        
        // Backup to local storage just in case
        const leads = JSON.parse(localStorage.getItem('uniboxx_leads') || '[]');
        leads.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('uniboxx_leads', JSON.stringify(leads));
        
        setSubmitted(true);
      } else {
        throw new Error('Google Apps Script returned an error');
      }
      
    } catch (error) {
      console.error('Error submitting lead:', error);
      alert("Something went wrong. Please try again or contact us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="section-padding bg-stone-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <div className="w-20 h-20 bg-earth-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-earth" />
            </div>
            <h2 className="text-3xl font-black text-dark-soft mb-4">Thank You! 🎉</h2>
            <p className="text-lg text-gray-text mb-8">
              Our team has received your enquiry and will contact you shortly.
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', company: '', service: '', budget: '', message: '' }); setCaptchaToken(null); }}
              className="btn-primary"
            >
              Submit Another Enquiry
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-stone-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-earth-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-40" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Get Started
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-dark-soft tracking-tight mb-4">
            Ready To Grow?
          </h2>
          <p className="text-lg text-gray-text max-w-xl mx-auto">
            Let's discuss your business and build a growth plan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-white rounded-2xl border border-stone-200 p-6 md:p-8 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark-soft mb-1.5">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-soft mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="form-input"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-dark-soft mb-1.5">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
                className="form-input"
              />
            </div>

            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark-soft mb-1.5">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-soft mb-1.5">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input form-select"
                >
                  <option value="">Select a service</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Websites">Websites</option>
                  <option value="Content & Branding">Content & Branding</option>
                  <option value="Technology">Technology</option>
                  <option value="AI Solutions">AI Solutions</option>
                  <option value="Multiple Services">Multiple Services</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-dark-soft mb-1.5">Budget Range</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="form-input form-select"
              >
                <option value="">Select budget range</option>
                <option value="Under ₹25,000">Under ₹25,000</option>
                <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                <option value="₹2,50,000+">₹2,50,000+</option>
                <option value="Not Sure">Not Sure</option>
              </select>
            </div>

            <div className="mt-4 mb-6">
              <label className="block text-sm font-semibold text-dark-soft mb-1.5">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project or requirements..."
                className="form-input resize-none"
              />
            </div>

            {/* Google reCAPTCHA v2 Checkbox */}
            <div className="flex justify-center sm:justify-start mb-6">
              <ReCAPTCHA
                sitekey="6LeJeC8tAAAAAFbV9fIQrOd-r8lSu6tP53HOlZEm" // 🚨 PASTE YOUR PUBLIC SITE KEY HERE
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Contact Us
                  <Send size={18} className="ml-2" />
                </>
              )}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white rounded-2xl border border-stone-200 p-6">
              <h3 className="text-lg font-bold text-dark-soft mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <a href="mailto:hello@uniboxx.in" className="flex items-center gap-3 text-gray-text hover:text-accent transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <span className="text-sm">hello@uniboxx.in</span>
                </a>
                <a href="tel:+918655452847" className="flex items-center gap-3 text-gray-text hover:text-accent transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <span className="text-sm">+91 86554 52847</span>
                </a>
                <div className="flex items-center gap-3 text-gray-text">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <span className="text-sm">India</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Card */}
            <a
              href="https://wa.me/918655452847?text=Hi%20Uniboxx%2C%0A%0AI%20would%20like%20to%20discuss%20my%20business%20growth%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 rounded-2xl p-6 text-white hover:bg-green-600 transition-colors card-hover"
            >
              <div className="flex items-center gap-3 mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-bold">WhatsApp Us</span>
              </div>
              <p className="text-sm text-white/80">
                Quick response. Chat directly with our team.
              </p>
            </a>

            {/* Response time card */}
            <div className="bg-accent-50 rounded-2xl border border-accent-100 p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">⚡</span>
                <h4 className="font-bold text-accent-dark">Fast Response</h4>
              </div>
              <p className="text-sm text-accent-dark/70">
                We typically respond within 2 hours during business hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};