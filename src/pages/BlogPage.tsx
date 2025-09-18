import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { mockBlogPosts } from '../data/mockData';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const allTags = Array.from(new Set(mockBlogPosts.flatMap(post => post.tags)));

  const filteredPosts = mockBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const featuredPost = mockBlogPosts[0];
  const regularPosts = mockBlogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Security Research Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and the latest trends in cybersecurity from our team of experts and the community.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Topics</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </Card>

        {/* Featured Article */}
        {!searchTerm && !selectedTag && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="overflow-hidden" hover>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map(tag => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(searchTerm || selectedTag ? filteredPosts : regularPosts).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col" hover>
                <div className="aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="text-xs text-gray-500">+{post.tags.length - 2}</span>
                      )}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                    >
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles match your search criteria.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <Card className="p-8 bg-blue-50">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest security insights and platform updates.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};