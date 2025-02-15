import PropTypes from 'prop-types';
import { PostHeader } from './PostHeader';

export function Post(props) {
  return (
    <>
      <article>
        <PostHeader
          onRemove={props.onRemove}
          post={props.post}
        />

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
