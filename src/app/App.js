import React, { useState, useMemo } from 'react';

import GlobalStyle from '../styles/global';
import Layout from '../Layout';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';


function App() {
  const [theme, setTheme] = useState('dark');


  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToogleTheme(){
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }


  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout
        onToggleTheme={handleToogleTheme}
        selectedTheme={theme}
      />
    </ThemeProvider>
  );
}

export default App;
