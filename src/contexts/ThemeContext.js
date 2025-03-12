import { useState, createContext, useContext, useEffect } from 'react';


export const ThemeContext = createContext({});


export function ThemeProvider({children}) {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'dark');

  function handleToogleTheme(){
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleToogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
