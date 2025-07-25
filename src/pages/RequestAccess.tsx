import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';

const RequestAccess: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with comprehensive form data
    const subject = encodeURIComponent('PRIVADA Access Request');
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Address:
${formData.address}
${formData.city}, ${formData.state} ${formData.zip}
${formData.country}

Company: ${formData.company}

Message:
${formData.message}`
    );
    const mailtoLink = `mailto:sales@privadatequila.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        company: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-primary-900">
      {/* Logo Header */}
      <div className="absolute top-6 left-6 z-10">
        <Link 
          to="/"
          className="font-serif text-2xl md:text-3xl font-bold text-gold-500 tracking-[0.18em] hover:text-gold-400 transition-colors"
        >
          PRIVADA
        </Link>
      </div>

      <div className="pt-24 pb-16">
      {/* Header */}
      <section className="px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-100 mb-8 mt-16">
            Request Access to <span className="text-gold-500 uppercase tracking-[0.12em]">PRIVADA</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-100/80 leading-relaxed">
            Join our exclusive community of tequila collectors and enthusiasts.
          </p>
        </div>
      </section>

      {/* Request Access Form */}
      <section className="px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-primary-800 border border-primary-700 p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="flex justify-center mb-6">
                  <Mail className="h-16 w-16 text-gold-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-100 mb-4">
                  Access Request Submitted
                </h3>
                <p className="text-primary-100/80">
                  Your request has been sent to our team. We'll review your application and be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-primary-100 mb-3 tracking-wider uppercase">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-primary-900 border border-primary-600 text-primary-100 placeholder-primary-100/50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-primary-100 mb-3 tracking-wider uppercase">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-primary-900 border border-primary-600 text-primary-100 placeholder-primary-100/50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-100 mb-3 tracking-wider uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-primary-900 border border-primary-600 text-primary-100 placeholder-primary-100/50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-100 mb-3 tracking-wider uppercase">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-primary-900 border border-primary-600 text-primary-100 placeholder-primary-100/50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-primary-100 mb-3 tracking-wider uppercase">
                    Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-primary-900 border border-primary-600 text-primary-100 placeholder-primary-100/50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                    placeholder="Enter your street address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-primary-100 mb-3 tracking-wider uppercase">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-primary-900 border border-primary-600 text-primary-100 placeholder-primary-100/50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-primary-100 mb-3 tracking-wider uppercase">
                      State/Province *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-primary-900 border border-primary-600 text-primary-100 placeholder-primary-100/50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                      placeholder="State/Province"
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-primary-100 mb-3 tracking-wider uppercase">
                      ZIP/Postal Code *
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-primary-900 border border-primary-600 text-primary-100 placeholder-primary-100/50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                      placeholder="ZIP/Postal"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-primary-100 mb-3 tracking-wider uppercase">
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-primary-900 border border-primary-600 text-primary-100 placeholder-primary-100/50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                    placeholder="Enter your country"
                  />
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary-100 mb-3 tracking-wider uppercase">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-primary-900 border border-primary-600 text-primary-100 placeholder-primary-100/50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                    placeholder="Company or organization name"
                  />
                </div>


                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-100 mb-3 tracking-wider uppercase">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-primary-900 border border-primary-600 text-primary-100 placeholder-primary-100/50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors resize-vertical"
                    placeholder="Tell us about your interest in PRIVADA, specific barrels you're looking for, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-3 py-4 bg-transparent border-2 border-gold-500 text-gold-500 font-medium tracking-wider hover:bg-gold-500 hover:text-primary-900 transition-all duration-300 uppercase"
                >
                  <Send className="h-5 w-5" />
                  <span>Submit Access Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-6 mt-16">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-primary-800 border border-primary-700 p-8">
            <h3 className="font-serif text-xl font-bold text-primary-100 mb-4">
              Questions?
            </h3>
            <p className="text-primary-100/80 mb-4">
              Need help with your access request or have questions about our collection?
            </p>
            <a 
              href="mailto:sales@privadatequila.com"
              className="inline-flex items-center space-x-2 text-gold-500 hover:text-gold-600 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>sales@privadatequila.com</span>
            </a>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default RequestAccess;