import PropTypes from 'prop-types';
import { PostHeader } from './PostHeader';
import { Rate, SubTitle } from './styles';
export function Post(props) {
  return (
    <article>
      <PostHeader
        onRemove={props.onRemove}
        post={props.post}

      />

      <br />
      <SubTitle>{props.post.subtitle}</SubTitle><br />
      <Rate>Likes: {props.post.likes / 2 || 0}</Rate>
    </article>
  );
}

Post.PropTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,

  }).isRequired,
  onRemove: PropTypes.func.isRequired
};
