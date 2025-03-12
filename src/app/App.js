import React, { useState, useMemo, useEffect, useLayoutEffect } from 'react';

import GlobalStyle from '../styles/global';
import Layout from '../Layout';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';
import { ThemeProvider as ThemeProviderContext,  } from '../contexts/ThemeContext';

function App() {
  const [theme] = useState('dark');
  return (
    <ThemeProviderContext>
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </ThemeProviderContext>
  );
}
// class App extends React.Component {


//   render() {
//     return (
//       <ThemeProviderClass>
//         <ThemeContextClass.Consumer>
//           {({theme}) => (
//             <ThemeProvider theme={themes[theme] || themes.dark}>
//               <GlobalStyle />
//               <Layout/>
//             </ThemeProvider>
//           )}
//         </ThemeContextClass.Consumer>
//       </ThemeProviderClass>
//     );
//   }
// }


export default App;
