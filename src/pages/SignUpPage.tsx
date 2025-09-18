import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, User, Building2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

export const SignUpPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hacker' | 'company'>('hacker');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    companyName: '',
  });
  const [error, setError] = useState('');
  const { user, signup, loading } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: activeTab,
      companyName: activeTab === 'company' ? formData.companyName : undefined,
    };

    const success = await signup(userData);
    if (!success) {
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full"
      >
        <Card className="p-8">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h2>
            <p className="text-gray-600">Join the BugBountyPro community</p>
          </div>

          {/* Tab Selection */}
          <div className="flex rounded-lg bg-gray-100 p-1 mb-8">
            <button
              type="button"
              onClick={() => setActiveTab('hacker')}
              className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'hacker'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <User className="h-4 w-4 mr-2" />
              Join as Hacker
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('company')}
              className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'company'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <Building2 className="h-4 w-4 mr-2" />
              Register Company
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {activeTab === 'company' && (
              <Input
                label="Company Name"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                required
                placeholder="Enter your company name"
              />
            )}

            <Input
              label={activeTab === 'hacker' ? 'Username' : 'Contact Person'}
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
              placeholder={activeTab === 'hacker' ? 'Choose a username' : 'Enter your name'}
            />

            <Input
              label="Email address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="Enter your email"
            />

            <Input
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              placeholder="Create a password"
            />

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Creating account...' : `Create ${activeTab} account`}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};