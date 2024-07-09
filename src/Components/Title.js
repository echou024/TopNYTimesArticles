import React from 'react';

const Title = ({ sortType, timeFrame }) => {
  return (
    <header>
      <h1>
        {sortType.charAt(0).toUpperCase() + sortType.slice(1)} -{' '}
        {timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)}
      </h1>
    </header>
  );
};

export default Title;