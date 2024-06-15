import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsComponent.css';
const NewsComponent = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        const apiKey = '08c2887f170043dcbea7a469db1e1cbc';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

        axios.get(apiUrl)
            .then(response => {
                setArticles(response.data.articles);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container-fluid ">
            {/* <h1 className="my-4 text-primary">Top Headlines</h1> */}
            <div className="row m-5">
                {articles.map((article, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100  ">
                            <img className="card-img-top" src={article.urlToImage} alt={article.title} style={{height:'200px'}} />
                            <div className="card-body">
                                <h4 className="card-title">{article.title}</h4>
                                <p className="card-text">{article.description}</p>
                            </div>
                            <div className="card-footer">
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>);
};

export default NewsComponent;
