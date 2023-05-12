import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';
import { Post, PostType } from './components/Post';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      name: 'Eduardo Nóbrega',
      occupation: 'Web Developer',
      avatarUrl: 'https://github.com/eduardonobrega.png',
    },
    content: [
      { type: 'paragraph', info: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        info: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', info: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-10 09:00:00'),
  },
  {
    id: 2,
    author: {
      name: 'Diego Fernandez',
      occupation: 'CTO @Rocketseat',
      avatarUrl: 'https://github.com/diego3g.png',
    },
    content: [
      { type: 'paragraph', info: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        info: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', info: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-02 19:30:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}
