import { createContext, useState } from 'react';


export const ThemeContextClass = createContext({});


export function ThemeProviderClass({children}) {
  const [theme, setTheme] = useState('dark');

  function handleToogleTheme(){
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeContextClass.Provider value={{
      handleToogleTheme,
      theme,
    }}>
      {children}
    </ThemeContextClass.Provider>
  );
}
