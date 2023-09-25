// threadSlice.js
import { createSlice } from '@reduxjs/toolkit';

const threadSlice = createSlice({
  name: 'threads',
  initialState: {
    selectedThread: null,
    threads: [
      { 
        id: 1, 
        title: 'WWE', 
        payPerViews: [
          {
            id: 1,
            name: 'Royal Rumble',
            matches: [
              { id: 1, match: 'Men\'s Royal Rumble Match', winner: 'Drew McIntyre', method: 'Last eliminating Roman Reigns' },
              { id: 2, match: 'Universal Championship Match (Strap Match)', winner: 'Bray Wyatt (as The Fiend)', method: 'Pinfall after a Sister Abigail' },
              { id: 3, match: 'Raw Women\'s Championship Match', winner: 'Becky Lynch', method: 'Pinfall after a Manhandle Slam' },
              { id: 4, match: 'Falls Count Anywhere Match', winner: 'Roman Reigns', method: 'Pinfall after a spear' },
              { id: 5, match: 'Women\'s Royal Rumble Match', winner: 'Charlotte Flair', method: 'Last eliminating Shayna Baszler' },
            ],
          },
          {
            id: 2,
            name: 'WrestleMania 36',
            matches: [
              { id: 6, match: 'Boneyard Match', winner: 'The Undertaker', method: 'Burial' },
              { id: 7, match: 'Firefly Fun House Match', winner: 'Bray Wyatt (as The Fiend)', method: 'Forfeit' },
              { id: 8, match: 'Universal Championship Match', winner: 'Braun Strowman', method: 'Pinfall after a Running Powerslam' },
              { id: 9, match: 'Raw Women\'s Championship Match', winner: 'Becky Lynch', method: 'Pinfall after a Roll-up' },
              { id: 10, match: 'Last Man Standing Match', winner: 'Edge', method: 'Edge incapacitated Randy Orton for a 10-count' },
            ],
          },
          // Add more WWE pay-per-views
        ],
      },
      { 
        id: 2, 
        title: 'UFC', 
        payPerViews: [
          {
            id: 1,
            name: 'UFC 249: Ferguson vs. Gaethje',
            matches: [
              { id: 1, match: 'Tony Ferguson vs. Justin Gaethje', winner: 'Justin Gaethje', method: 'TKO (punches)' },
              { id: 2, match: 'Henry Cejudo vs. Dominick Cruz', winner: 'Henry Cejudo', method: 'TKO (knee and punches)' },
              { id: 3, match: 'Francis Ngannou vs. Jairzinho Rozenstruik', winner: 'Francis Ngannou', method: 'KO (punches)' },
              { id: 4, match: 'Calvin Kattar vs. Jeremy Stephens', winner: 'Calvin Kattar', method: 'TKO (elbow and punches)' },
              { id: 5, match: 'Greg Hardy vs. Yorgan de Castro', winner: 'Greg Hardy', method: 'Decision (unanimous)' },
            ],
          },
          // Add more UFC pay-per-views
        ],
      },
      // Add more threads as needed
    ],
  },
  reducers: {
    selectThread: (state, action) => {
      state.selectedThread = action.payload;
    },
  },
});

export const { selectThread } = threadSlice.actions;
export default threadSlice.reducer;
