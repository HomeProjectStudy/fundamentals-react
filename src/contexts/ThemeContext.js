import { useState, createContext, useContext } from 'react';


export const ThemeContext = createContext({});


export function ThemeProvider({children}) {
  const [theme, setTheme] = useState('light');


  function handleToogleTheme() {
    setTheme((prevState) => prevState === 'light' ? 'dark' : 'light');
  }

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
