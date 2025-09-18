import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Smartphone, 
  Key, 
  AlertTriangle, 
  CheckCircle, 
  Copy, 
  Download,
  Monitor,
  MapPin,
  Calendar,
  X
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const SecuritySettingsPage: React.FC = () => {
  const { user } = useAuth();
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [backupCodes, setBackupCodes] = useState<string[]>([]);
  const [showBackupCodes, setShowBackupCodes] = useState(false);

  // Mock active sessions
  const activeSessions = [
    {
      id: '1',
      device: 'MacBook Pro',
      location: 'San Francisco, CA',
      ip: '192.168.1.100',
      lastActive: '2024-01-20T10:30:00Z',
      current: true,
    },
    {
      id: '2',
      device: 'iPhone 15 Pro',
      location: 'San Francisco, CA',
      ip: '192.168.1.101',
      lastActive: '2024-01-20T09:15:00Z',
      current: false,
    },
    {
      id: '3',
      device: 'Chrome on Windows',
      location: 'New York, NY',
      ip: '203.0.113.5',
      lastActive: '2024-01-19T14:22:00Z',
      current: false,
    },
  ];

  // Mock recent security activity
  const securityActivity = [
    {
      id: '1',
      action: 'Password changed',
      timestamp: '2024-01-19T16:45:00Z',
      ip: '192.168.1.100',
      location: 'San Francisco, CA',
    },
    {
      id: '2',
      action: 'New device login',
      timestamp: '2024-01-18T11:30:00Z',
      ip: '203.0.113.5',
      location: 'New York, NY',
    },
    {
      id: '3',
      action: 'Email address updated',
      timestamp: '2024-01-17T09:12:00Z',
      ip: '192.168.1.100',
      location: 'San Francisco, CA',
    },
  ];

  const handleEnable2FA = () => {
    setShowQRCode(true);
  };

  const handleConfirm2FA = () => {
    setTwoFAEnabled(true);
    setShowQRCode(false);
    
    // Generate mock backup codes
    const codes = Array.from({ length: 8 }, () => 
      Math.random().toString(36).substring(2, 8).toUpperCase()
    );
    setBackupCodes(codes);
    setShowBackupCodes(true);
  };

  const handleDisable2FA = () => {
    setTwoFAEnabled(false);
    setBackupCodes([]);
  };

  const copyBackupCodes = () => {
    navigator.clipboard.writeText(backupCodes.join('\n'));
  };

  const downloadBackupCodes = () => {
    const blob = new Blob([backupCodes.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'backup-codes.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const revokeSession = (sessionId: string) => {
    // Handle session revocation
    console.log('Revoking session:', sessionId);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Security Settings</h1>
        <p className="text-gray-600">Manage your account security and privacy settings.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Two-Factor Authentication */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${twoFAEnabled ? 'bg-green-100' : 'bg-gray-100'}`}>
                  <Smartphone className={`h-6 w-6 ${twoFAEnabled ? 'text-green-600' : 'text-gray-600'}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-600">
                    Add an extra layer of security to your account
                  </p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                twoFAEnabled 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {twoFAEnabled ? 'Enabled' : 'Disabled'}
              </div>
            </div>

            {!twoFAEnabled ? (
              <div>
                <p className="text-gray-700 mb-4">
                  Secure your account with two-factor authentication using an authenticator app.
                </p>
                <Button variant="primary" onClick={handleEnable2FA}>
                  <Shield className="h-4 w-4 mr-2" />
                  Enable 2FA
                </Button>
              </div>
            ) : (
              <div>
                <div className="flex items-center space-x-2 text-green-600 mb-4">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Two-factor authentication is enabled</span>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" onClick={() => setShowBackupCodes(true)}>
                    View Backup Codes
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleDisable2FA} className="text-red-600 hover:text-red-700">
                    Disable 2FA
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </motion.div>

        {/* Login Alerts */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Login Alerts</h3>
                <p className="text-sm text-gray-600">
                  Get notified about suspicious login attempts
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Email notifications for new logins</span>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">SMS alerts for suspicious activity</span>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Browser notifications</span>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Active Sessions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Active Sessions</h3>
            <Button variant="outline" size="sm">
              Revoke All Sessions
            </Button>
          </div>

          <div className="space-y-4">
            {activeSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white rounded-lg">
                    <Monitor className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{session.device}</span>
                      {session.current && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                          Current Session
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {session.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(session.lastActive).toLocaleString()}
                      </div>
                      <span>{session.ip}</span>
                    </div>
                  </div>
                </div>
                {!session.current && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => revokeSession(session.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    Revoke
                  </Button>
                )}
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Recent Security Activity */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Security Activity</h3>
          
          <div className="space-y-4">
            {securityActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {activity.location}
                    </div>
                    <span>{activity.ip}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(activity.timestamp).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-md mx-4"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Set up Two-Factor Authentication</h3>
              
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                {/* Mock QR Code - in real app, this would be generated */}
                <div className="w-48 h-48 bg-white mx-auto flex items-center justify-center border-2 border-gray-300">
                  <div className="text-gray-500 text-center">
                    <Key className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">QR Code</p>
                    <p className="text-xs">Scan with your app</p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-6">
                Scan this QR code with your authenticator app, then enter the 6-digit code to complete setup.
              </p>
              
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Enter 6-digit code"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-center text-lg font-mono"
                  maxLength={6}
                />
              </div>
              
              <div className="flex space-x-3">
                <Button variant="outline" onClick={() => setShowQRCode(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleConfirm2FA}>
                  Verify & Enable
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Backup Codes Modal */}
      {showBackupCodes && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-md mx-4"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Backup Codes</h3>
              <p className="text-sm text-gray-600">
                Save these backup codes in a safe place. You can use them to access your account if you lose your authenticator device.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="grid grid-cols-2 gap-2 font-mono text-sm">
                {backupCodes.map((code, index) => (
                  <div key={index} className="bg-white p-2 rounded border text-center">
                    {code}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-3 mb-4">
              <Button variant="outline" onClick={copyBackupCodes} className="flex-1">
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
              <Button variant="outline" onClick={downloadBackupCodes} className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
            
            <Button variant="primary" onClick={() => setShowBackupCodes(false)} className="w-full">
              I've Saved My Codes
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  );
};