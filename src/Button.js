import PropTypes from 'prop-types';

export function Button(props){
  return (
    <button onClick={() => props.onClick()}>{props.children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
