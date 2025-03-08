import React, { Component } from 'react';
import PropTypes from 'prop-types';


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
  static propTypes = {
    onToggleTheme: PropTypes.func.isRequired,
    selectedTheme: PropTypes.string.isRequired
  };

  render(){
    const { onToggleTheme, selectedTheme } = this.props;
    return(
      <Container>
        <h1>JStack Blog</h1>
        <button
          type="button"
          onClick={onToggleTheme}
        >
          {selectedTheme === 'dark' ? '🌙' : '🌞'}
        </button>
      </Container>
    );
  }
}
