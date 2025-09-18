import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Users, Shield } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        inquiryType: 'general',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@bugbountypro.com',
      description: 'Send us an email and we\'ll respond within 24 hours.',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      details: 'Available 24/7',
      description: 'Chat with our support team in real-time.',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM PST',
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: 'San Francisco, CA',
      description: '123 Security Street, Suite 400',
    },
  ];

  const faqItems = [
    {
      question: 'How do I start a bug bounty program?',
      answer: 'Contact our team to discuss your security needs and we\'ll help you design a program that fits your requirements and budget.',
    },
    {
      question: 'How do hackers get paid?',
      answer: 'We handle all payment processing securely through our platform. Payments are typically processed within 5-7 business days after report validation.',
    },
    {
      question: 'What types of vulnerabilities are accepted?',
      answer: 'We accept all types of security vulnerabilities based on the scope defined in each program. Common types include XSS, SQL injection, authentication bypasses, and more.',
    },
    {
      question: 'Is there customer support available?',
      answer: 'Yes, we offer 24/7 customer support through multiple channels including email, live chat, and phone support for critical issues.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our platform, need support, or want to discuss your security program? 
            We're here to help and would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Inquiry
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="security">Security Concern</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your name"
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <Input
                    label="Company (optional)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                  />

                  <Input
                    label="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    placeholder="Brief subject of your message"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="p-6" hover>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-blue-600 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600 text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Additional Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <Card className="p-6 text-center" hover>
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">For Companies</h3>
            <p className="text-gray-600 text-sm mb-4">
              Ready to launch your security program? Let's discuss how we can help protect your assets.
            </p>
            <Button variant="outline" size="sm">Enterprise Sales</Button>
          </Card>

          <Card className="p-6 text-center" hover>
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">For Hackers</h3>
            <p className="text-gray-600 text-sm mb-4">
              Questions about our platform or need help getting started? We're here to support you.
            </p>
            <Button variant="outline" size="sm">Hacker Support</Button>
          </Card>

          <Card className="p-6 text-center" hover>
            <MessageSquare className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Media & Press</h3>
            <p className="text-gray-600 text-sm mb-4">
              Journalist or researcher? Contact our media team for interviews and press materials.
            </p>
            <Button variant="outline" size="sm">Media Kit</Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};