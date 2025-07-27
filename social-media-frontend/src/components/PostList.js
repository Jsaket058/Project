import React, { useEffect, useState } from 'react';
import API from '../api';

function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await API.get('/posts');
    setPosts(res.data);
  };

  useEffect(() => { fetchPosts(); }, []);

  return (
    <div>
      <h3>All Posts</h3>
      {posts.map(post => (
        <div key={post._id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '5px' }}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <small>By {post.author?.username || 'Unknown'}</small>
        </div>
      ))}
    </div>
  );
}

export default PostList;
