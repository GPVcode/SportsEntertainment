import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../pages/components/sidebar/SideBar'; // Assuming you have a Sidebar component
import PostList from '../pages/components/posts/PostList'; // Assuming you have a component to display posts
import '../App.css'

const WWEThread = ({PPVList}) => {
  const selectedThread = useSelector(state => state.threads.selectedThread);
  const posts = useSelector(state => state.posts.posts);

  return (
    <div className="home-container">
    <div className="left">
      <Sidebar />
      </div>
      <div className="middle">
        <PostList posts={posts} />
      </div>
      <div className="right">
        <PPVList />
      </div>
      </div>
  );
};

export default WWEThread;
