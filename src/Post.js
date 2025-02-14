import PropTypes from 'prop-types';

export function Post(props) {

  return (
    <>
      <article>
        <strong>{props.post.title}</strong>
        <button onClick={() => props.onRemove(props.post.id)}>remover</button>
        <br />
        <small>{props.post.subtitle}</small><br />
        Likes: {props.likes || 0}
      </article>
      <br />
    </>
  );
}

Post.PropTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
  }).isRequired,
  onRemove: PropTypes.func.isRequired
};
