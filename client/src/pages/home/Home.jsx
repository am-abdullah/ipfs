import React, { useState } from 'react';
import Modal from 'react-modal';
import Post from  '../../components/post/Post';
import CreatePostModal from '../../components/create-post-modal/CreatePostModal';

import './Home.css';

export function Home({
  posts
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="home">
      <OpenModalBox
        onOpen={() => setModalIsOpen(true)}
      />
      {posts.map(post => (
        <Post
          key={post.id}
          description={post.description}
          imageUrl={post.imageUrl}
          user={post.user}
        />
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <CreatePostModal/>
      </Modal>
    </div>
  )
}

function OpenModalBox({
  onOpen
}) {
  return (
    <div className="open-modal-box">
      <h2>Create Post</h2>
      <button className="app-button app-button-primary" onClick={onOpen}>Open Modal</button>
    </div>
  );
}