import React, { useState, useEffect } from 'react';
import Title from './Components/Title';
import Sidebar from './Components/Sidebar';
import Articles from './Components/Articles';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [sortType, setSortType] = useState('viewed');
  const [timeFrame, setTimeFrame] = useState('week');
  const [numArticles, setNumArticles] = useState(6);

  const apiKey = '[secret-key]';
  const timeframeKey = {
    day: '1',
    week: '7',
    month: '30',
  };

  const getArticles = async () => {
    try {
      const url = `https://api.nytimes.com/svc/mostpopular/v2/${sortType}/${timeframeKey[timeFrame]}.json?api-key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.results);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    getArticles();
  }, [sortType, timeFrame]);

  const handleSortChange = (value) => {
    setSortType(value);
  };

  const handleTimeFrameChange = (value) => {
    setTimeFrame(value);
  };

  const handleSearch = (numArticlesToDisplay) => {
    setNumArticles(numArticlesToDisplay);
  };

  return (
    <div>
      <Title sortType={sortType} timeFrame={timeFrame} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Sidebar
              onSortChange={handleSortChange}
              onTimeFrameChange={handleTimeFrameChange}
              onSearch={handleSearch}
            />
          </div>
          <div className="col-md-8">
            <Articles articles={articles.slice(0, numArticles)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
