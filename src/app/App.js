import React, { useState, useMemo, useEffect, useLayoutEffect } from 'react';

import GlobalStyle from '../styles/global';
import Layout from '../Layout';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';


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

  state = {
    theme:'dark'
  };



  handleToogleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    }));
  };

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={this.handleToogleTheme}
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  }
}


export default App;
