'use client';

import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { FacebookIcon, TwitterIcon } from 'lucide-react';

const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <PhoneIcon className="text-white text-2xl" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      description: "Available 24/7"
    },
    {
      icon: <WhatsAppIcon className="text-white text-2xl" />,
      title: "WhatsApp",
      details: "+1 (555) 123-4567",
      action: "https://wa.me/15551234567",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      description: "Instant chat support"
    },
    {
      icon: <EmailIcon className="text-white text-2xl" />,
      title: "Email",
      details: "support@zacademy.com",
      action: "mailto:support@zacademy.com",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      description: "Response within 24h"
    },
    {
      icon: <ChatIcon className="text-white text-2xl" />,
      title: "Live Chat",
      details: "Click to Start Chat",
      action: "#chat",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
      description: "Available 9AM-9PM EST"
    }
  ];

  const quickLinks = [
    { text: "📞 Emergency Support", link: "tel:+15551234567" },
    { text: "📧 Admissions Query", link: "mailto:admissions@zacademy.com" },
    { text: "💬 Technical Help", link: "#chat" },
    { text: "📋 Course Counseling", link: "mailto:counseling@zacademy.com" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="contact">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in <span className="text-[#348d88]">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help! Reach out to us through any of these channels 
            or fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Methods */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <MessageIcon className="mr-2 text-[#348d88]" />
                Quick Contact
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-start p-4 rounded-xl hover:shadow-md transition-all duration-300 group hover:scale-[1.02]"
                  >
                    <div className={`${method.color} p-3 rounded-xl mr-4 group-hover:shadow-lg transition-shadow`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 group-hover:text-[#348d88] transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-gray-700 font-medium">{method.details}</p>
                      <p className="text-sm text-gray-500 mt-1">{method.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <LocationOnIcon className="mr-2 text-[#348d88]" />
                Quick Links
              </h3>
              
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <span className="text-gray-700 group-hover:text-[#348d88] transition-colors">
                      {link.text}
                    </span>
                    <span className="ml-auto text-gray-400 group-hover:text-[#348d88] transition-colors">→</span>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex items-center mb-4">
                  <ScheduleIcon className="mr-2 text-[#348d88]" />
                  <h4 className="font-semibold text-gray-800">Business Hours</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircleIcon className="text-green-600 text-4xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <p className="text-sm text-gray-500">
                    You will be redirected to the form shortly...
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Send us a Message
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and our team will contact you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#348d88] focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#348d88] focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#348d88] focus:border-transparent transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#348d88] focus:border-transparent transition-all bg-white"
                        >
                          <option value="">Select a topic</option>
                          <option value="admissions">Admissions Inquiry</option>
                          <option value="courses">Course Information</option>
                          <option value="payment">Payment Issue</option>
                          <option value="technical">Technical Support</option>
                          <option value="feedback">Feedback/Suggestion</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#348d88] focus:border-transparent transition-all resize-none"
                        placeholder="Please describe your inquiry in detail..."
                      />
                    </div>

                    {/* Additional Options */}
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="newsletter"
                          className="h-4 w-4 text-[#348d88] focus:ring-[#348d88] border-gray-300 rounded"
                        />
                        <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                          Subscribe to our newsletter for updates and offers
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="callback"
                          className="h-4 w-4 text-[#348d88] focus:ring-[#348d88] border-gray-300 rounded"
                        />
                        <label htmlFor="callback" className="ml-2 text-sm text-gray-600">
                          Request a callback within 2 hours
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#348d88] to-[#2a716d] hover:from-[#2a716d] hover:to-[#1f5652] text-white hover:shadow-xl transform hover:-translate-y-1'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <SendIcon className="mr-3" />
                          Send Message
                        </>
                      )}
                    </button>

                    {/* Privacy Note */}
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By submitting this form, you agree to our Privacy Policy. 
                      We'll never share your information with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;