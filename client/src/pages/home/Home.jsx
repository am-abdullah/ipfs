import React, { useState } from 'react';
import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5'
import Post from  '../../components/post/Post';
import CreatePostForm from '../../components/create-post-form/CreatePostForm';

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
        style={{
          content: {
            borderRadius: '25px',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
          }
        }}
      >
        <div className="close-modal-button-container">
          <IoClose onClick={() => setModalIsOpen(false)}/>
        </div>
        <CreatePostForm/>
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