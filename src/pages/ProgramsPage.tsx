import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Award, Users, Star } from 'lucide-react';
import { mockPrograms } from '../data/mockData';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const ProgramsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [assetTypeFilter, setAssetTypeFilter] = useState('');

  const filteredPrograms = mockPrograms.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = !industryFilter || program.industry === industryFilter;
    const matchesAssetType = !assetTypeFilter || program.assetType === assetTypeFilter;
    
    return matchesSearch && matchesIndustry && matchesAssetType;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bug Bounty Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover security programs from leading companies worldwide. Find the perfect match for your skills and start earning rewards.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Industries</option>
              <option value="Technology">Technology</option>
              <option value="Financial Services">Financial Services</option>
              <option value="Healthcare">Healthcare</option>
            </select>

            <select
              value={assetTypeFilter}
              onChange={(e) => setAssetTypeFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Asset Types</option>
              <option value="Web Application">Web Application</option>
              <option value="Mobile App">Mobile App</option>
              <option value="API">API</option>
            </select>

            <Button variant="outline" className="flex items-center justify-center">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </Card>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full" hover>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={program.logo}
                      alt={program.company}
                      className="h-12 w-12 rounded-lg mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{program.name}</h3>
                      <p className="text-gray-600">{program.company}</p>
                    </div>
                    {program.isLive && (
                      <div className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Live
                      </div>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-2">{program.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="h-4 w-4 mr-1" />
                        Reward Range
                      </div>
                      <span className="font-semibold text-green-600">{program.rewardRange}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        Resolved Reports
                      </div>
                      <span className="font-semibold">{program.resolvedReports}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {program.industry}
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                      {program.assetType}
                    </span>
                  </div>

                  <Button variant="primary" className="w-full">
                    View Program
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No programs match your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};