import React from 'react';
import './article.css';

const Article = ({imgUrl,text,date}) => {
    return (
        <div className='gpt3__blog-container_article'>
            <div className='gpt3__blog-container_article-image'>
                <img src={imgUrl} alt='blog'/>
            </div>
            <div className='gpt3__blog-container_artivle-content'>
                <div>
                    <p>{date}</p>
                    <h3>{text}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article;
