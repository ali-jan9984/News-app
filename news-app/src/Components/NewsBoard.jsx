import { useEffect, useState } from "react";
import NewsItem from "./NewsItem"; 
import styles from './NewsItem.module.css';

const apiKey = '1bccdf5c1625447a9dbe584572829913';


const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.articles) {
          setArticles(data.articles);
        }
      })
      .catch(error => console.error("Error fetching the news articles:", error));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.length > 0 ? (
        articles.map((news, id) => (
          <NewsItem 
            key={id} 
            title={news.title} 
            description={news.description} 
            src={news.urlToImage} 
            url={news.url} 
          />
        ))
      ) : (
        <p className={styles.NOnews}>No news articles available <span className={styles.Refresh}>Refresh the Page</span></p>
      )}
    </div>
  );
}

export default NewsBoard;


