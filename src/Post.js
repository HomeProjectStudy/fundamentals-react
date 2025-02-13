import PropTypes from 'prop-types';

export function Post(props) {

  return (
    <>
      <article>
        <strong>{props.post.title}</strong> <br />
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
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
  }).isRequired
};
