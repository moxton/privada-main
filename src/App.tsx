import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PasswordGate from './components/PasswordGate';
import Layout from './components/Layout';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('privada-authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    localStorage.setItem('privada-authenticated', 'true');
  };

  return (
    <Router>
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
          
          {isAuthenticated ? (
            <>
              <Route path="/home" element={<Layout><Home /></Layout>} />
              <Route path="/collection" element={<Layout><Collection /></Layout>} />
              <Route path="/about" element={<Layout><About /></Layout>} />
              <Route path="/contact" element={<Layout><Contact /></Layout>} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" replace />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;