import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Award, Users, AlertTriangle, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  const hackerStats = [
    { label: 'Total Reports', value: '23', icon: Shield, color: 'text-blue-600' },
    { label: 'Resolved Reports', value: '18', icon: CheckCircle, color: 'text-green-600' },
    { label: 'Total Earnings', value: '$12,500', icon: DollarSign, color: 'text-green-600' },
    { label: 'Reputation Points', value: '2,850', icon: TrendingUp, color: 'text-purple-600' },
  ];

  const companyStats = [
    { label: 'Active Programs', value: '3', icon: Shield, color: 'text-blue-600' },
    { label: 'Pending Reports', value: '7', icon: Clock, color: 'text-yellow-600' },
    { label: 'Total Paid', value: '$45,000', icon: DollarSign, color: 'text-green-600' },
    { label: 'Top Researchers', value: '24', icon: Users, color: 'text-purple-600' },
  ];

  const stats = user?.role === 'hacker' ? hackerStats : companyStats;

  const recentReports = [
    { id: '1', title: 'SQL Injection in User Profile', severity: 'high', status: 'triaged', reward: 2500 },
    { id: '2', title: 'XSS in Comment Section', severity: 'medium', status: 'resolved', reward: 800 },
    { id: '3', title: 'CSRF in Password Reset', severity: 'low', status: 'pending', reward: 0 },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'triaged': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, {user?.username}!
        </h1>
        <p className="text-gray-400">
          {user?.role === 'hacker' 
            ? "Here's an overview of your bug hunting activity and achievements."
            : "Monitor your security programs and manage incoming vulnerability reports."}
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-dark-800 border-dark-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Reports */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-6 bg-dark-800 border-dark-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">
                {user?.role === 'hacker' ? 'Your Recent Reports' : 'Incoming Reports'}
              </h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-white mb-2">{report.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(report.severity)}`}>
                        {report.severity}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">
                      {report.reward > 0 ? `$${report.reward}` : 'Pending'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="p-6 bg-dark-800 border-dark-700">
            <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
            
            <div className="space-y-4">
              {user?.role === 'hacker' ? (
                <>
                  <Button variant="primary" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Submit New Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Award className="h-4 w-4 mr-2" />
                    Browse Programs
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Leaderboard
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="primary" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Create New Program
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Invite Researchers
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Review Reports
                  </Button>
                </>
              )}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Recommended Programs (Hacker) / Program Statistics (Company) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Card className="p-6 bg-dark-800 border-dark-700">
          <h2 className="text-xl font-semibold text-white mb-6">
            {user?.role === 'hacker' ? 'Recommended Programs' : 'Program Performance'}
          </h2>
          
          {user?.role === 'hacker' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 border border-dark-600 rounded-lg bg-dark-700">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg mr-3"></div>
                    <div>
                      <h3 className="font-medium text-white">TechCorp Security</h3>
                      <p className="text-sm text-gray-400">$500 - $10,000</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">Web application security testing program.</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Program
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500">156</div>
                  <div className="text-sm text-gray-400">Total Submissions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">89%</div>
                  <div className="text-sm text-gray-400">Valid Reports</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">4.2</div>
                  <div className="text-sm text-gray-400">Avg. Response Time (days)</div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </motion.div>
    </div>
  );
};