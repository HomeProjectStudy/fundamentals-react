import React from 'react';

import { Container } from './styles';
import { useTheme } from '../../contexts/ThemeContext';

export default function Footer() {
  const {theme, handleToogleTheme} = useTheme();

  return (
    <Container>
      <span>JStacks Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={handleToogleTheme}
      >
        {theme === 'dark' ? '🌙' : '🌞'}

      </button>
    </Container>

  );
}
