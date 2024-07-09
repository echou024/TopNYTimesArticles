import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className="card mb-3">
      <h5 className="card-title">{article.title} <small className="text-muted">{article.published_date}</small>
      </h5>
      <div className="row no-gutters">
        <div className="col-md-4">
          {article.media.length > 0 && article.media[0]['media-metadata'] ? (
            <img
              src={article.media[0]['media-metadata'][0].url}
              className="card-img"
              alt="Article Thumbnail"
            />
          ) : (
            <div>No image available</div>
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">{article.abstract}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;