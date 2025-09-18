import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { DashboardLayout } from './components/layout/DashboardLayout';

// Public Pages
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';

// Protected Pages
import { DashboardPage } from './pages/DashboardPage';
import { ProfileSettingsPage } from './pages/ProfileSettingsPage';
import { SecuritySettingsPage } from './pages/SecuritySettingsPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
            <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
            <Route path="/programs" element={<PublicLayout><ProgramsPage /></PublicLayout>} />
            <Route path="/leaderboard" element={<PublicLayout><LeaderboardPage /></PublicLayout>} />
            <Route path="/blog" element={<PublicLayout><BlogPage /></PublicLayout>} />
            <Route path="/blog/:id" element={<PublicLayout><BlogPostPage /></PublicLayout>} />
            <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
            <Route path="/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
            <Route path="/signup" element={<PublicLayout><SignUpPage /></PublicLayout>} />
            <Route path="/forgot-password" element={<PublicLayout><ForgotPasswordPage /></PublicLayout>} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <DashboardPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/settings/profile" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <ProfileSettingsPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/settings/security" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <SecuritySettingsPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

// Public Layout Wrapper
const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default App;