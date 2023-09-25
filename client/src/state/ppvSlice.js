import { createSlice } from '@reduxjs/toolkit';

const ppvSlice = createSlice({
  name: 'payPerViews',
  initialState: {
    payPerViews: [
      {
        id: 1,
        name: 'Royal Rumble',
        date: 'January 26, 2020',
        headliners: 'Brock Lesnar vs. Ricochet (WWE Championship)',
      },
      {
        id: 2,
        name: 'Super ShowDown',
        date: 'February 27, 2020',
        headliners: 'Goldberg vs. "The Fiend" Bray Wyatt (Universal Championship)',
      },
      {
        id: 3,
        name: 'Elimination Chamber',
        date: 'March 8, 2020',
        headliners: 'Shayna Baszler vs. Asuka vs. Natalya vs. Liv Morgan vs. Ruby Riott vs. Sarah Logan (Elimination Chamber match for a Raw Women\'s Championship match at WrestleMania 36)',
      },
      {
        id: 4,
        name: 'WrestleMania 36',
        date: 'April 4-5, 2020',
        headliners: 'Various matches including Brock Lesnar vs. Drew McIntyre (WWE Championship) and The Undertaker vs. AJ Styles (Boneyard match)',
      },
      {
        id: 5,
        name: 'Money in the Bank',
        date: 'May 10, 2020',
        headliners: 'Men\'s and Women\'s Money in the Bank ladder matches',
      },
      {
        id: 6,
        name: 'Backlash',
        date: 'June 14, 2020',
        headliners: 'Edge vs. Randy Orton (Greatest Wrestling Match Ever)',
      },
      {
        id: 7,
        name: 'Extreme Rules',
        date: 'July 19, 2020',
        headliners: 'Bray Wyatt vs. Braun Strowman (Wyatt Swamp Fight)',
      },
      {
        id: 8,
        name: 'SummerSlam',
        date: 'August 23, 2020',
        headliners: 'Drew McIntyre vs. Randy Orton (WWE Championship)',
      },
      {
        id: 9,
        name: 'Payback',
        date: 'August 30, 2020',
        headliners: 'The Fiend vs. Roman Reigns vs. Braun Strowman (No Holds Barred Triple Threat match for the Universal Championship)',
      },
      {
        id: 10,
        name: 'Clash of Champions',
        date: 'September 27, 2020',
        headliners: 'Roman Reigns vs. Jey Uso (Universal Championship)',
      },
      {
        id: 11,
        name: 'Hell in a Cell',
        date: 'October 25, 2020',
        headliners: 'Drew McIntyre vs. Randy Orton (Hell in a Cell match for the WWE Championship)',
      },
      {
        id: 12,
        name: 'Survivor Series',
        date: 'November 22, 2020',
        headliners: 'Various traditional Survivor Series matches',
      },
      {
        id: 13,
        name: 'TLC: Tables, Ladders & Chairs',
        date: 'December 20, 2020',
        headliners: 'Various matches including Drew McIntyre vs. AJ Styles (Tables, Ladders, and Chairs match for the WWE Championship)',
      },
    ],
  },
});

export default ppvSlice.reducer;

