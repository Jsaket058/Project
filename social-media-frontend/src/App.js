import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>🧑‍💻 Mini Social Media</h1>
      {!loggedIn ? (
        <>
          <Register />
          <hr />
          <Login onLogin={() => setLoggedIn(true)} />
        </>
      ) : (
        <>
          <button onClick={() => { localStorage.clear(); setLoggedIn(false); }}>Logout</button>
          <PostForm refreshPosts={() => window.location.reload()} />
          <PostList />
        </>
      )}
    </div>
  );
}

export default App;
