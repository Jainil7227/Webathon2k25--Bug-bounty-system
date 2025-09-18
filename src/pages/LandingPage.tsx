import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Users, Award, TrendingUp, CheckCircle, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const LandingPage: React.FC = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Triage & Validation',
      description: 'Expert security team validates all submissions to ensure quality and accuracy.',
    },
    {
      icon: DollarSign,
      title: 'Managed Payouts',
      description: 'Secure and timely reward distribution with transparent payment processing.',
    },
    {
      icon: Shield,
      title: 'Secure Communication',
      description: 'Encrypted channels for sensitive vulnerability disclosure and collaboration.',
    },
  ];

  const testimonials = [
    {
      quote: "BugBountyPro helped us identify critical vulnerabilities we never knew existed.",
      author: "Sarah Johnson",
      role: "CISO, TechCorp",
      avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      quote: "The platform's quality and professionalism exceeded all my expectations.",
      author: "Mike Chen",
      role: "Security Researcher",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  const stats = [
    { label: 'Total Bounties Paid', value: '$2.5M+', icon: DollarSign },
    { label: 'Vulnerabilities Found', value: '15,000+', icon: Shield },
    { label: 'Happy Hackers', value: '5,000+', icon: Users },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-950 via-purple-900 to-primary-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-400/10 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Secure Your Code.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Reward the Talent.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
              Connect with ethical hackers worldwide to discover vulnerabilities before malicious actors do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/25">
                  For Companies
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                  For Hackers
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose BugBountyPro?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with human expertise to deliver unparalleled security testing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-8 text-center h-full bg-dark-800 border-dark-700 hover:border-primary-500/50 transition-all duration-300" hover>
                  <feature.icon className="h-12 w-12 text-primary-500 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-8 bg-dark-800 border-dark-700">
                  <p className="text-gray-300 text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Join thousands of companies and researchers already using our platform.
            </p>
            <Link to="/signup">
              <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};