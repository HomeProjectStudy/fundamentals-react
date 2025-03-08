import React from 'react';
import { ThemeContextClass } from '../../contexts/ThemeContext-class';

import { Container } from './styles';

export default function Footer() {
  return (
    <ThemeContextClass.Consumer>

      {({theme, handleToogleTheme}) => (
        <Container>
          <span>JStacks Blog. Todos os direitos reservados.</span>
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
