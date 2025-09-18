import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, TrendingUp, Medal } from 'lucide-react';
import { mockLeaderboard } from '../data/mockData';
import { Card } from '../components/ui/Card';

export const LeaderboardPage: React.FC = () => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Award className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-orange-500" />;
      default:
        return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
      case 2:
        return 'bg-gradient-to-r from-gray-300 to-gray-500 text-white';
      case 3:
        return 'bg-gradient-to-r from-orange-400 to-orange-600 text-white';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Top Security Researchers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the ethical hackers who make the internet safer for everyone. Rankings based on reputation points and contributions.
          </p>
        </motion.div>

        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Global Leaderboard
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Researcher
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reputation
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Bounties
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockLeaderboard.map((entry, index) => (
                  <motion.tr
                    key={entry.username}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${getRankBadge(entry.rank)}`}>
                        {getRankIcon(entry.rank)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={entry.avatar}
                          alt={entry.username}
                          className="h-10 w-10 rounded-full mr-4"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{entry.username}</div>
                          <div className="text-sm text-gray-500">Security Researcher</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">
                          {entry.reputation.toLocaleString()}
                        </div>
                        <div className="ml-2 text-xs text-blue-600">points</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-green-600">
                        ${entry.totalBounties.toLocaleString()}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="p-6 text-center">
              <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hall of Fame</h3>
              <p className="text-gray-600 text-sm">
                Top researchers who have made significant contributions to cybersecurity.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recognition</h3>
              <p className="text-gray-600 text-sm">
                Earn reputation points and badges for your security research achievements.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600 text-sm">
                Track your progress and climb the leaderboard with consistent contributions.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};