import React, { useState } from 'react';
import axios from 'axios';

export const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://posts.com:4000/posts', {
      title,
    });

    setTitle('');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='form-control'
          />
        </div>
        <button className='btn btn-primary'>Sumbit</button>
      </form>
    </div>
  );
};

export default PostCreate;
