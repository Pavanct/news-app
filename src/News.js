import React, { useState, useEffect } from "react";

const News = () => {
    const [hasError, setErrors] = useState(false);
    const [news, setNews] = useState({});
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0e77112837cf40ebbaac370369ccb447";
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setNews(res))
            .catch(err => setErrors(err))
    }, []);

    return news;
}

export default News;