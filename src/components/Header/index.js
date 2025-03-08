import React, { Component } from 'react';
import { ThemeContextClass } from '../../contexts/ThemeContext-class';

import { Container } from './styles';

// export default function Header({onToggleTheme, selectedTheme}) {
//   return (
//     <Container>
//       <h1>JStack Blog</h1>
//       <button
//         type="button"
//         onClick={onToggleTheme}
//       >
//         {selectedTheme === 'dark' ? '🌙' : '🌞'}
//       </button>
//     </Container>
//   );
// }

export default class Header extends Component {

  render(){
    const { onToggleTheme, selectedTheme } = this.props;
    return(
      <ThemeContextClass.Consumer>
        {({theme, handleToogleTheme}) => (
          <Container>
            <h1>JStack Blog</h1>
            <button
              type="button"
              onClick={handleToogleTheme}
            >
              {theme === 'dark' ? '🌙' : '🌞'}
            </button>
          </Container>
        )}
      </ThemeContextClass.Consumer>

    );
  }
}
