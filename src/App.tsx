import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PasswordGate from './components/PasswordGate';
import Layout from './components/Layout';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Bottling from './pages/Bottling.tsx';
import RequestAccess from './pages/RequestAccess';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const sessionTimeoutRef = useRef<number | null>(null);

  // Error boundary state
  const [hasError, setHasError] = useState(false);

  // Session timeout: 30 minutes (in ms)
  const SESSION_TIMEOUT = 30 * 60 * 1000;

  // Reset session timer on activity
  const resetSessionTimer = () => {
    if (sessionTimeoutRef.current) clearTimeout(sessionTimeoutRef.current);
    sessionTimeoutRef.current = window.setTimeout(() => {
      localStorage.removeItem('privada-authenticated');
      setIsAuthenticated(false);
    }, SESSION_TIMEOUT);
  };

  useEffect(() => {
    const authStatus = localStorage.getItem('privada-authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      resetSessionTimer();
    }
    // Listen for user activity
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    events.forEach(event => window.addEventListener(event, resetSessionTimer));
    return () => {
      if (sessionTimeoutRef.current) clearTimeout(sessionTimeoutRef.current);
      events.forEach(event => window.removeEventListener(event, resetSessionTimer));
    };
  }, []);

  // Error boundary logic
  const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return hasError ? <Navigate to="/" replace /> : <>{children}</>;
  };

  // Catch errors in children
  useEffect(() => {
    const errorHandler = (e: any) => {
      setHasError(true);
    };
    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', errorHandler);
    return () => {
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', errorHandler);
    };
  }, []);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    localStorage.setItem('privada-authenticated', 'true');
    resetSessionTimer();
  };

  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen bg-primary-900 text-primary-100">
          <Routes>
            <Route 
              path="/" 
              element={
                isAuthenticated ? 
                  <Navigate to="/home" replace /> : 
                  <PasswordGate onAuthenticate={handleAuthentication} />
              } 
            />
            <Route path="/request-access" element={<RequestAccess />} />
            {isAuthenticated ? (
              <>
                <Route path="/home" element={<Layout><Home /></Layout>} />
                <Route path="/collection" element={<Layout><Collection /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                <Route path="/bottling" element={<Layout><Bottling /></Layout>} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" replace />} />
            )}
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;