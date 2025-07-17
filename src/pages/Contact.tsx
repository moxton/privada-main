import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent('Privada Barrel Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:sales@privadatequila.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-100 mb-8">
            Request Access to Privada
          </h1>
          <p className="text-lg md:text-xl text-primary-100/80 leading-relaxed">
            <span className="font-body font-light tracking-[0.05em]">Interested in our exclusive barrel collection? Send us your inquiry and we'll be in touch.</span>
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-primary-800 border border-primary-700 p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="flex justify-center mb-6">
                  <Mail className="h-16 w-16 text-gold-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-100 mb-4">
                  Message Sent
                </h3>
                <p className="text-primary-100/80">
                  Your inquiry has been forwarded to our team. We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-100 mb-3 tracking-wider uppercase">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-primary-900 border border-primary-600 text-primary-100 placeholder-primary-100/50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

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
                  <label htmlFor="message" className="block text-sm font-medium text-primary-100 mb-3 tracking-wider uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-primary-900 border border-primary-600 text-primary-100 placeholder-primary-100/50 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors resize-vertical"
                    placeholder="What barrel are you interested in? Any specific questions about our collection?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-3 py-4 bg-transparent border-2 border-gold-500 text-gold-500 font-medium tracking-wider hover:bg-gold-500 hover:text-primary-900 transition-all duration-300 uppercase"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-6 mt-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-primary-800 border border-primary-700 p-8">
            <h3 className="font-serif text-xl font-bold text-primary-100 mb-4">
              Direct Contact
            </h3>
            <p className="text-primary-100/80 mb-4">
              For immediate inquiries about specific barrels:
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
  );
};

export default Contact;