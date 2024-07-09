import React, { useState } from 'react';

const Sidebar = ({ onSortChange, onTimeFrameChange, onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  const handleTimeFrameChange = (e) => {
    onTimeFrameChange(e.target.value);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    const numArticles = parseInt(searchValue, 10);
    if (numArticles >= 1 && numArticles <= 15) {
      onSearch(numArticles);
    } else {
      alert('number is higher than 15 and less than 1');
    }
  };
  

  return (
    <div className="filters card">
      <div className="card-body">
        <h2 style={{ fontWeight: 'bold' }}>Filter</h2>
        <div>
          <input
            type="number"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Enter a value 1-15"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <form>
          <fieldset>
            <legend style={{ fontWeight: 'bold' }}>Sort By:</legend>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sort"
                id="viewed"
                value="Most Viewed"
                onChange={handleSortChange}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="viewed">
                Most Viewed
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sort"
                id="shared"
                value="Most Shared"
                onChange={handleSortChange}
              />
              <label className="form-check-label" htmlFor="shared">
                Most Shared
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sort"
                id="emailed"
                value="Most Emailed"
                onChange={handleSortChange}
              />
              <label className="form-check-label" htmlFor="emailed">
                Most Emailed
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend style={{ fontWeight: 'bold' }}>Time Frame:</legend>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="time"
                id="day"
                value="day"
                onChange={handleTimeFrameChange}
              />
              <label className="form-check-label" htmlFor="day">
                Day
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="time"
                id="week"
                value="week"
                onChange={handleTimeFrameChange}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="week">
                Week
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="time"
                id="month"
                value="month"
                onChange={handleTimeFrameChange}
              />
              <label className="form-check-label" htmlFor="month">
                Month
              </label>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;