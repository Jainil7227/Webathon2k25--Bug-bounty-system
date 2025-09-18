import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: Partial<User> & { password: string }) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUsers: User[] = [
  {
    id: '1',
    username: 'hackmaster',
    email: 'hacker@example.com',
    role: 'hacker',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    bio: 'Ethical hacker with 5+ years of experience in web security',
    reputation: 2850,
    totalBounties: 125000,
    socialLinks: {
      twitter: '@hackmaster',
      github: 'hackmaster',
    },
  },
  {
    id: '2',
    username: 'TechCorp',
    email: 'security@techcorp.com',
    role: 'company',
    companyName: 'TechCorp Solutions',
    avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('bugBountyUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser && password === 'password123') {
      setUser(foundUser);
      localStorage.setItem('bugBountyUser', JSON.stringify(foundUser));
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const signup = async (userData: Partial<User> & { password: string }): Promise<boolean> => {
    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      username: userData.username!,
      email: userData.email!,
      role: userData.role!,
      companyName: userData.companyName,
      avatar: userData.role === 'hacker' 
        ? 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
        : 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=150',
      reputation: userData.role === 'hacker' ? 0 : undefined,
      totalBounties: userData.role === 'hacker' ? 0 : undefined,
    };
    
    setUser(newUser);
    localStorage.setItem('bugBountyUser', JSON.stringify(newUser));
    setLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bugBountyUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};