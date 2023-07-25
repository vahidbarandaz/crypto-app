import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import millify from 'millify';
import style from  "./Homepage.module.css";

//Redux
import { fetchCoins } from "../../redux/coins/coinsAction";
import { fetchNews } from '../../redux/news/newsActions';

//Components
import Cryptocurrencies from '../cryptocurrencies/Cryptocurrencies';
import NewsItem from '../newsItem/NewsItem';
import Loading from "../Loading/Loading";


const Homepage = () => {

    const dispatch = useDispatch();
    const coinsState = useSelector(state => state.coinsState);
    const newsState = useSelector(state => state.newsState);

    useEffect(() => {
        dispatch(fetchCoins());
        dispatch(fetchNews("Cryptocurrency", 5))
    }, [dispatch])

    const globalStats = coinsState?.coins?.data?.stats;
    
    const currencies = coinsState?.coins?.data?.coins;
    const topTenCurrencies = currencies?.filter(currency => currency.rank < 11);
    
    const news = newsState?.news?.value;

    return (
        <>
            { 
                newsState.loading || coinsState.loading ? <div className={style.loading}><Loading/></div> :
                
                <div className={style.container}>
                    <div className={style.titleContainer}>
                        <h2>Global Crypto Stats</h2>
                    </div>
                    <div className={style.statsContainer}>
                        <div>
                            <h5 className='stats-title'>Total Cryptcurrencies</h5>
                            <span>{millify(globalStats?.total)}</span>
                            <h5 className='stats-title'>Total Exchanges</h5>
                            <span>{millify(globalStats?.totalExchanges)}</span>
                            <h5 className='stats-title'>Total Market cap</h5>
                            <span>${millify(globalStats?.totalMarketCap)}</span>
                        </div>
                        <div>
                            <h5 className='stats-title'>Total 24h Volume</h5>
                            <span>${millify(globalStats?.total24hVolume)}</span>
                            <h5 className='stats-title'>Total Markets</h5>
                            <span>{millify(globalStats?.totalMarkets)}</span>
                        </div>
                    </div>
                    <div className={style.titleContainer}>
                        <h2>Top 10 Cryptocurrencies in the world</h2>
                        <Link to="/cryptocurrencies">Show More</Link>
                    </div>
                    <div className={style.cryptoMainContainer}>
                        <div className={style.cryptoContainer}>
                            {
                                topTenCurrencies?.map(currency => <Cryptocurrencies key={currency.uuid} currency={currency}/>)
                            }
                        </div>
                    </div>
                    <div className={style.titleContainer}>
                        <h2>Latest Crypto News</h2>
                        <Link to="/news">Show More</Link>
                    </div>
                    <div className={style.newsMainContainer}>
                        <div className={style.newsContainer}>
                            {
                                news?.map((item, index) => <NewsItem key={index} data={item}/>)
                            }
                        </div>
                    </div>
                </div>
            }
            
        </>
    );
};

export default Homepage;