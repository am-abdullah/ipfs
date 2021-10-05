import React from 'react';
import Post from  '../../components/post/Post';

import './Home.css';

export function Home({
  posts
}) {
  return (
    <div className="home">
      <OpenModalBox/>
      {posts.map((post, index) => (
        <Post
          key={index}
          description={post.description}
          imageUrl={post.imageUrl}
          user={post.user}
        />
      ))}
    </div>
  )
}

function OpenModalBox() {
  return (
    <div className="open-modal-box">
      <h2>Create Post</h2>
      <button className="app-button app-button-primary">Open Modal</button>
    </div>
  );
}