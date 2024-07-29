import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { ThemeProvider } from './context/ThemeContext';
import ThemeBtn from './components/ThemeBtn';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className={`h-full w-full ${themeMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="flex justify-end p-4">
          <ThemeBtn />
        </div>
        <div className='w-full h-full m-auto border-2 border-black'>
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
