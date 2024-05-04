import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './global.css'
import style from './App.module.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/afonsodglan.png',
      name: 'Afonso Dglan',
      role: 'FullStack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-03-15 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/afonsodglan.png',
      name: 'vinicius',
      role: 'FullStack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-03-17 20:00:00')
  }
];

export function App() {
  return (
    <>
    <Header/>
    <div className={style.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
    </>
  )
}