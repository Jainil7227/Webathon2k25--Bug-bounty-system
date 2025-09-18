import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Zap, Award, Globe } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former CISO with 15+ years in cybersecurity',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: '#',
    },
    {
      name: 'Marcus Chen',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google security engineer and ethical hacker',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: '#',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Security Research',
      bio: 'Leading vulnerability researcher and author',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: '#',
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Platform architect with focus on scalable systems',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedin: '#',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every decision we make prioritizes the security and privacy of our users and their data.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We believe in the power of collaborative security and ethical hacking communities.',
    },
    {
      icon: Target,
      title: 'Transparency',
      description: 'Open communication and transparent processes build trust with all stakeholders.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously evolving our platform with cutting-edge security technologies.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Partner Companies', icon: Globe },
    { number: '10,000+', label: 'Security Researchers', icon: Users },
    { number: '50,000+', label: 'Vulnerabilities Found', icon: Shield },
    { number: '$5M+', label: 'Bounties Awarded', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building a Secure<br />
              <span className="text-blue-200">Digital Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              We're on a mission to make the internet safer by connecting ethical hackers with organizations worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To democratize cybersecurity by creating the most trusted and efficient platform for ethical hackers 
                and organizations to collaborate in making the digital world safer for everyone.
              </p>
              <p className="text-lg text-gray-700">
                We believe that security is not a destination, but a continuous journey that requires the collective 
                effort of the global security community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6">
                A world where every digital product is secure by design, where ethical hackers are recognized as 
                essential partners in cybersecurity, and where organizations proactively embrace crowd-sourced security.
              </p>
              <p className="text-lg text-gray-700">
                We envision a future where vulnerability disclosure is seamless, rewarding, and mutually beneficial 
                for all parties involved.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we build relationships with our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full" hover>
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that showcase our commitment to building a safer digital ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Security experts, engineers, and visionaries working together to revolutionize cybersecurity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full" hover>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 text-blue-100">
              Whether you're a security researcher or an organization looking to improve your security posture, 
              we'd love to have you be part of our growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};