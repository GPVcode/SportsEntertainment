import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [
      { id: 1, threadId: 1, content: 'Dummy post content for WWE thread.' },
      { id: 2, threadId: 2, content: 'Dummy post content for WWE thread.' },
      { id: 3, threadId: 3, content: 'Dummy post content for WWE thread.' },
      { id: 4, threadId: 4, content: 'Dummy post content for WWE thread.' },
      { id: 5, threadId: 5, content: 'Dummy post content for WWE thread.' },
     
    ],
  },
});

export default postSlice.reducer;
