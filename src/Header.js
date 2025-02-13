
import PropTypes from 'prop-types';

export function Header({ title, children }) {

  return (
    <>
      <h1>{title}</h1>
      {children}
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
