import PropTypes from 'prop-types';
import { useTheme } from './contexts/ThemeContext';

export function Button(props){
  const { theme } = useTheme();
  return (
    <button
      onClick={() => props.onClick()}
      style={{
        color: theme === 'light' ? '#000' : '#fff',
        backgroundColor: theme === 'light' ? '#fff' : '#000',
        border: theme === 'light' ? '1px solid #000' : '1px solid #fff',
        height: 32,
        borderRadius:8,
      }}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
