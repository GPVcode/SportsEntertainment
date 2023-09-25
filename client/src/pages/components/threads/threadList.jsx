import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectThread } from '../../../state/threadSlice';

const ThreadsList = () => {
  const threads = useSelector(state => state.threads.threads);
  const dispatch = useDispatch();

  const handleThreadClick = (thread) => {
    dispatch(selectThread(thread));
  };


  return (
    <div>
      <h1>Threads List</h1>
      <ul>
        {threads.map(thread => (
          <li key={thread.id} onClick={() => handleThreadClick(thread)}>
            {thread.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadsList;
