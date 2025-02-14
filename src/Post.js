import PropTypes from 'prop-types';

export function Post(props) {
  return (
    <>
      <article>
        <strong>
          {
            props.post.read ? (
              <s>{props.post.title}</s>
            ) : (
              props.post.title
            )
          }
        </strong>
        <button onClick={() => props.onRemove(props.post.id)}>remover</button>
        <br />
        <small>{props.post.subtitle}</small><br />
        Likes: {props.post.likes || 0}
      </article>
      <br />
    </>
  );
}

Post.PropTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool,

  }).isRequired,
  onRemove: PropTypes.func.isRequired
};
