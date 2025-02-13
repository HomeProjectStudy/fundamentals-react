import { Post } from './Post';
import { Header } from './Header';

function App() {
  return (
    <>
      <Header
        title="Notícias"
        subtitle="Posts da semana"
      >
        <h2>Posts da semana</h2>
      </Header>
      <hr />
      <Post
        likes={20}
        post={{
          title: 'Título da notícia 01',
          subtitle: 'Subtitle da notícia'
        }}
      />
      <Post
        post={{
          title: 'Título da notícia 02',
          subtitle: 'Subtitle da notícia 02'
        }}
      />
      <Post
        post={{
          title: 'Título da notícia 03',
          subtitle: 'Subtitle da notícia 03'
        }}
      />

    </>
  );
}

export default App;
