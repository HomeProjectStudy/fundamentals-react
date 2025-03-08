import { createContext, useEffect, useState } from 'react';


export const ThemeContextClass = createContext({});


export function ThemeProviderClass({children}) {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'dark');

  function handleToogleTheme(){
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContextClass.Provider value={{
      handleToogleTheme,
      theme,
    }}>
      {children}
    </ThemeContextClass.Provider>
  );
}
