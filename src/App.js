import React, { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import Login from './login';
import Dashboard from './dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <MantineProvider>
      <div>
        {!isAuthenticated ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Dashboard onLogout={handleLogin} />
        )}
      </div>
    </MantineProvider>
  );
}

export default App;
