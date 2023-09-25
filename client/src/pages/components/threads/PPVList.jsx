import React from 'react';
import { useSelector } from 'react-redux';

const PPVList = () => {
  const ppvs = useSelector(state => state.payPerViews.payPerViews);

  return (
    <div >
      <h1>Upcoming PPVs</h1>
      <ul>
        {ppvs.map(ppv => (
          <li key={ppv.id} cl>
            {ppv.name} - {ppv.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PPVList;
