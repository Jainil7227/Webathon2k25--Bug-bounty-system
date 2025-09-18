import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Camera, Twitter, Github, Linkedin, Save } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const ProfileSettingsPage: React.FC = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    bio: user?.bio || '',
    twitter: user?.socialLinks?.twitter || '',
    github: user?.socialLinks?.github || '',
    linkedin: user?.socialLinks?.linkedin || '',
  });
  
  const [showPasswordSection, setShowPasswordSection] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update
    console.log('Profile updated:', formData);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password change
    console.log('Password changed');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setShowPasswordSection(false);
  };

  const notificationSettings = [
    { id: 'email_reports', label: 'Email notifications for new reports', enabled: true },
    { id: 'email_payments', label: 'Email notifications for payments', enabled: true },
    { id: 'email_programs', label: 'New program recommendations', enabled: false },
    { id: 'email_security', label: 'Security alerts and updates', enabled: true },
  ];

  const [notifications, setNotifications] = useState(notificationSettings);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
        <p className="text-gray-600">Manage your personal information and account preferences.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
              
              <form onSubmit={handleProfileSubmit} className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <img
                      src={user?.avatar}
                      alt={user?.username}
                      className="h-20 w-20 rounded-full border-4 border-gray-200"
                    />
                    <button
                      type="button"
                      className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{user?.username}</h3>
                    <p className="text-gray-600 capitalize">{user?.role} Account</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Social Links</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Twitter className="h-5 w-5 text-blue-400" />
                      <Input
                        placeholder="@username"
                        value={formData.twitter}
                        onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                        className="mb-0"
                      />
                    </div>
                    <div className="flex items-center space-x-3">
                      <Github className="h-5 w-5 text-gray-800" />
                      <Input
                        placeholder="github username"
                        value={formData.github}
                        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                        className="mb-0"
                      />
                    </div>
                    <div className="flex items-center space-x-3">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                      <Input
                        placeholder="linkedin profile"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        className="mb-0"
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" variant="primary">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Password Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Password</h2>
                {!showPasswordSection && (
                  <Button
                    variant="outline"
                    onClick={() => setShowPasswordSection(true)}
                  >
                    Change Password
                  </Button>
                )}
              </div>

              {showPasswordSection && (
                <form onSubmit={handlePasswordSubmit} className="space-y-6">
                  <Input
                    label="Current Password"
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                    required
                  />
                  <Input
                    label="New Password"
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    required
                  />
                  <Input
                    label="Confirm New Password"
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    required
                  />
                  
                  <div className="flex space-x-4">
                    <Button type="submit" variant="primary">
                      Update Password
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowPasswordSection(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </motion.div>
        </div>

        {/* Notification Preferences */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Notifications</h2>
              
              <div className="space-y-4">
                {notifications.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{setting.label}</span>
                    <button
                      onClick={() => setNotifications(notifications.map(n => 
                        n.id === setting.id ? { ...n, enabled: !n.enabled } : n
                      ))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        setting.enabled ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          setting.enabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};