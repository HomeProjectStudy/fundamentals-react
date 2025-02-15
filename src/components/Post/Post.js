import PropTypes from 'prop-types';
import { PostHeader } from './PostHeader';
import { Container, Rate, SubTitle } from './styles';
export function Post(props) {
  return (
    <Container removed={props.post.removed}>
      <PostHeader
        onRemove={props.onRemove}
        post={props.post}
      />

      <br />
      <SubTitle>{props.post.subtitle}</SubTitle><br />
      <Rate>Likes: {props.post.likes / 2 || 0}</Rate>
    </Container>
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
