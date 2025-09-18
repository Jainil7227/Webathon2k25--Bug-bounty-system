export interface User {
  id: string;
  username: string;
  email: string;
  role: 'hacker' | 'company';
  avatar?: string;
  bio?: string;
  reputation?: number;
  totalBounties?: number;
  companyName?: string;
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export interface Program {
  id: string;
  name: string;
  company: string;
  logo: string;
  description: string;
  rewardRange: string;
  resolvedReports: number;
  industry: string;
  assetType: string;
  isLive: boolean;
  requirements: string[];
}

export interface Report {
  id: string;
  title: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'triaged' | 'resolved' | 'duplicate' | 'not-applicable';
  reward: number;
  programId: string;
  hackerId: string;
  createdAt: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image: string;
  tags: string[];
}

export interface LeaderboardEntry {
  rank: number;
  username: string;
  avatar: string;
  reputation: number;
  totalBounties: number;
}