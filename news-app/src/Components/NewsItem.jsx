import React from "react";
import styles from './NewsItem.module.css';
import image from '../Assests/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.webp';

const NewsItem = ({title,description,url,src}) => {
  return (
    <div class="card bg-dark text-light mb-3 d-inline-block my-3 mx-2 py-2 px-2" style={{maxWidth:"345px"}} className={styles.cardContainer}>
  <img src={src?src:image} style={{height:"200px,",borderRadius:"10px",}} class="card-img-top" alt="News image"/>
  <div class="card-body">
    <h5 class="card-title mt-2">{title.slice(0,50)}</h5>
    <p class="card-text">{description?description.slice(0,90):"News and story are available on the site of the great to see him and where you can get every news."}</p>
    <a href={url} class="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem;
