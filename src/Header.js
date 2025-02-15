
import PropTypes from 'prop-types';
import { Button } from './Button';
import { useTheme } from './contexts/ThemeContext';

export function Header({ title, children }) {
  const { handleToogleTheme } = useTheme();
  return (
    <>
      <h1>{title}</h1>
      {children}
      <br />
      <div style={{ marginTop: 40}}>
        <Button onClick={handleToogleTheme}>mudar tema</Button>
      </div>
    </>
  );
}

Header.proTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
Header.defaultProps = {
  title: 'Posts do blog'
};
