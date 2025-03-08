import React, { useState, useMemo, useEffect, useLayoutEffect } from 'react';

import GlobalStyle from '../styles/global';
import Layout from '../Layout';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';
import { ThemeProviderClass, ThemeContextClass } from '../contexts/ThemeContext-class';

// function App() {
//   const [theme, setTheme] = useState('dark');



//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);

// function handleToogleTheme(){
//   setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
// }


//   useEffect(() => {
//     localStorage.setItem('theme', JSON.stringify(theme));
//   }, [theme]);

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       <Layout
//         onToggleTheme={handleToogleTheme}
//         selectedTheme={theme}
//       />
//     </ThemeProvider>
//   );
// }
class App extends React.Component {


  render() {


    return (
      <ThemeProviderClass>
        <ThemeContextClass.Consumer>
          {({theme}) => (
            <ThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout/>
            </ThemeProvider>
          )}
        </ThemeContextClass.Consumer>
      </ThemeProviderClass>
    );
  }
}


export default App;
