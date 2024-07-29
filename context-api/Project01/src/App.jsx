// import Profile from './components/Profile'
// import Login from './components/Login'
// import UserContextProvider from './components/context/UserContextProvider'

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/UserContext';
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    if (themeMode === 'dark') {
      console.log('Applying dark mode');
      document.documentElement.classList.add('dark');
    } else {
      console.log('Removing dark mode');
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="App">
        <ThemeBtn />
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
