
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { useTheme } from '../../contexts/ThemeContext';

export function Header({ title, children }) {
  const { handleToogleTheme } = useTheme();

  return (
    <div>
      <h1 >{title}</h1>
      <Button onClick={handleToogleTheme}>mudar tema</Button>
      {children}
      <br />
    </div>
  );
}

Header.proTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
Header.defaultProps = {
  title: 'Posts do blog'
};
