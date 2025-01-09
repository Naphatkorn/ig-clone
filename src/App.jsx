import React, { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Input from './components/Input'
import Post from './components/Post';

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = {id: id, title: title};
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function delPost(id) {
    const updatedPost = posts.filter((p) => p.id !== id);
    setPosts(updatedPost);
  }

  return (
    <>
      <Navbar />
      <Input addPost={addPost}/>
      {posts.map((p) => (<Post key={p.id} id={p.id} title={p.title} delPost={delPost} />))}
    </>
  )
}

export default App
