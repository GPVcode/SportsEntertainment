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
          <li key={thread.id}>
            <strong>{thread.title}</strong>
            <ul>
              {thread.payPerViews.map(ppv => (
                <li key={ppv.id} onClick={() => handleThreadClick(thread)}>
                  {ppv.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadsList;
