
import PropTypes from 'prop-types';
import { Button } from './Button';
import { useTheme } from './contexts/ThemeContext';
import styles from './Header.module.css';

export function Header({ title, children }) {
  const { handleToogleTheme } = useTheme();

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
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
