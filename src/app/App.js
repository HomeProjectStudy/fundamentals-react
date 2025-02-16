import React from 'react';

import GlobalStyle from '../styles/global';
import Layout from '../Layout';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';


function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
