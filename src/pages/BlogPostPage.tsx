import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft, Share2, Bookmark, Heart } from 'lucide-react';
import { mockBlogPosts } from '../data/mockData';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = mockBlogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = mockBlogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  const fullContent = `
    ${post.content}

    ## Introduction

    In today's rapidly evolving digital landscape, cybersecurity has become more critical than ever before. As organizations continue to embrace digital transformation, the attack surface expands, creating new opportunities for malicious actors to exploit vulnerabilities.

    This comprehensive guide will walk you through the essential concepts, best practices, and emerging trends that every security professional should be aware of in 2024.

    ## Key Security Challenges

    ### 1. Cloud Security Complexities

    As more businesses migrate to cloud infrastructure, traditional security models are being challenged. The shared responsibility model means that organizations must understand exactly what they're responsible for securing versus what their cloud provider handles.

    ### 2. Zero Trust Architecture

    The old "trust but verify" model is no longer sufficient. Zero Trust assumes that threats exist both inside and outside the network, requiring continuous verification of every transaction.

    ### 3. AI and Machine Learning Threats

    While AI can enhance security defenses, it also introduces new attack vectors. Adversarial machine learning and deepfake technologies pose significant challenges for security teams.

    ## Best Practices for Implementation

    1. **Continuous Monitoring**: Implement real-time monitoring across all systems and networks
    2. **Regular Security Assessments**: Conduct penetration testing and vulnerability assessments quarterly
    3. **Employee Training**: Ensure all staff members receive regular cybersecurity awareness training
    4. **Incident Response Planning**: Maintain and regularly test incident response procedures

    ## The Role of Bug Bounty Programs

    Crowdsourced security through bug bounty programs has proven to be an effective method for identifying vulnerabilities that traditional testing methods might miss. These programs leverage the collective expertise of ethical hackers worldwide.

    ### Benefits of Bug Bounty Programs:

    - **Diverse Perspectives**: Hackers from different backgrounds bring unique testing approaches
    - **Cost-Effective**: Pay only for valid vulnerabilities found
    - **Continuous Testing**: 24/7 security testing from a global community
    - **Responsible Disclosure**: Structured process for reporting and fixing vulnerabilities

    ## Looking Forward

    The cybersecurity landscape will continue to evolve rapidly. Organizations that invest in comprehensive security strategies, embrace new technologies, and foster relationships with the security research community will be best positioned to defend against emerging threats.

    ## Conclusion

    Cybersecurity is not a one-time implementation but an ongoing process that requires continuous attention, investment, and adaptation. By staying informed about the latest trends and maintaining strong security practices, organizations can build resilient defenses against both current and future threats.

    Remember, security is everyone's responsibility, from the C-suite to individual contributors. Building a security-conscious culture is just as important as implementing the right technologies.
  `;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="overflow-hidden">
            <div className="aspect-video">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <div className="text-gray-300">•</div>
                <span>8 min read</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
              
              <p className="text-xl text-gray-700 mb-6">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <Card className="p-8">
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {fullContent}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt={post.author}
                className="w-16 h-16 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{post.author}</h3>
                <p className="text-gray-600 mb-2">Senior Security Researcher at BugBountyPro</p>
                <p className="text-sm text-gray-500">
                  {post.author} is a cybersecurity expert with over 10 years of experience in vulnerability research and secure development practices. 
                  They regularly speak at security conferences and contribute to open-source security tools.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Card key={relatedPost.id} className="overflow-hidden" hover>
                  <div className="aspect-video">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};