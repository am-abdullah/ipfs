import React from 'react';
import { IconContext } from 'react-icons'
import { IoCloudUploadOutline } from 'react-icons/io5'

import './CreatePostModal.css';

export default function CreatePostModal() {
  return (
    <div className="create-post-modal">
      <div className="create-post-modal-file-box">
        <IconContext.Provider value={{ size: '100px', color: '#e4ccff' }}>
          <IoCloudUploadOutline/>
        </IconContext.Provider>
        <div className="file-input-container">
          <label htmlFor="file-upload" className="app-button file-upload-label">
            <input type="file" id="file-upload" name="file-upload" className="file-upload-input" accept="image/png, image/gif, image/jpeg"/>
            Browse
          </label>
        </div>
      </div>
      <div className="post-text-input-container">
        <label htmlFor="post-text-input" className="post-text-input-label">Post Description</label>
        <textarea className="post-text-input" id="post-text-input" name="post-text-input"></textarea>
      </div>
      <div className="submit-button-container">
        <button className="app-button app-button-primary" type="submit">Submit</button>
      </div>
    </div>
  );
}