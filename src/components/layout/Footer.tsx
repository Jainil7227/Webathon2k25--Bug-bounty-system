import React from 'react';
import { Shield, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 text-white border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold">BugBountyPro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting ethical hackers with companies to create a more secure digital world.
              Join thousands of researchers making the internet safer.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-6 w-6 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
              <Github className="h-6 w-6 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
              <Mail className="h-6 w-6 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="/programs" className="text-gray-400 hover:text-primary-400 transition-colors">Browse Programs</a></li>
              <li><a href="/leaderboard" className="text-gray-400 hover:text-primary-400 transition-colors">Leaderboard</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-primary-400 transition-colors">Security Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BugBountyPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};