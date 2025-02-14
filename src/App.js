import { Post } from './Post';
import { Header } from './Header';
import { useState } from 'react';




function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random() * 1000,
      title: 'Título da notícia 01',
      subtitle: 'Subtitle da notícia',
      likes: 20
    },
    {
      id: Math.random() * 1000,
      title: 'Título da notícia 02',
      subtitle: 'Subtitle da notícia 02',
      likes: 210
    },
    {
      id: Math.random() * 1000,
      title: 'Título da notícia 03',
      subtitle: 'Subtitle da notícia 03',
      likes: 310
    }
  ]);

  function handleRefresh() {
    setPosts((prevState) => [...prevState, {
      id: Math.random() * 1000,
      title: `Título da notícia ${posts.length + 1}`,
      subtitle: `Subtitle da notícia  ${posts.length + 1}`,
      likes: 410 + posts.length + 1
    }]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }

  return (
    <>
      <Header
        title="Notícias"
        subtitle="Posts da semana"
      >
        <h2>Posts da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>
      <hr />
      {
        posts.map((post) => (
          <Post
            key={post.id}
            likes={post.likes}
            post={{
              id: post.id,
              title: post.title,
              subtitle: post.subtitle
            }}
            onRemove={handleRemovePost}
          />
        ))
      }

    </>
  );
}

export default App;
