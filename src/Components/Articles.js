import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';

const Articles = ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6; // 3 articles per column, 6 per page total

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const oddArticles = currentArticles.filter((_, index) => index % 2 === 0);
  const evenArticles = currentArticles.filter((_, index) => index % 2 !== 0);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="article-container">
      <div className="article-column">
        {oddArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
      <div className="article-column">
        {evenArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
      <div className="pagination-container">
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={articles.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Articles;
