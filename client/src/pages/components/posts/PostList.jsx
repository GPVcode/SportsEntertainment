import React from 'react';
import { useSelector } from 'react-redux';
import './posts.css'

const PostList = () => {
  const posts = useSelector(state => state.posts.posts);

  return (
    <div className="post-list">
      <h2>Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3><a href='/some-post'>Intriguing Title</a></h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;