import React, { useState } from 'react';
import API from '../api';

function PostForm({ refreshPosts }) {
  const [form, setForm] = useState({ title: '', content: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/posts', form);
    setForm({ title: '', content: '' });
    refreshPosts();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Post</h3>
      <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Content" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })}></textarea>
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;
