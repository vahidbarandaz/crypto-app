import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import style from "./News.module.css"
;//Redux
import { fetchNews } from '../../redux/news/newsActions';

//Components
import NewsItem from "../newsItem/NewsItem";
import Loading from '../Loading/Loading';

const News = () => {

    const dispatch = useDispatch();
    const newsState = useSelector(state => state.newsState);


    useEffect(() => {
        dispatch(fetchNews("Cryptocurrency", 15));
    }, [dispatch])
    
    const news = newsState?.news?.value;

    if(newsState.loading) return <div className={style.loading}><Loading/></div>

    return (
        <div className={style.container}>
            {
                news?.map((item, index) => <NewsItem key={index} data={item}/>)
            }
        </div>
    );
};

export default News;