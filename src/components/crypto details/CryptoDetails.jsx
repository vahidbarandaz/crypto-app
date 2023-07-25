import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HTMLReactParser from 'html-react-parser';
import { useParams } from "react-router-dom";
import millify from "millify";

//Components
import Loading  from "../Loading/Loading";

import style from "./CryptoDetails.module.css";

//Redux
import { fetchCoins } from '../../redux/coins/coinsAction';

//Icons
import {AiOutlineFieldNumber, AiOutlineThunderbolt, AiOutlineDollarCircle, AiOutlineTrophy, AiOutlineFund, AiOutlineMoneyCollect, AiOutlineStop, AiOutlineExclamationCircle, AiOutlineCheckCircle} from "react-icons/ai";

const CryptoDetails = () => {

    const { coinId } = useParams();

    const dispatch = useDispatch();
    const coinsState = useSelector(state => state.coinsState)

    useEffect(() => {
        dispatch(fetchCoins(`coin/${coinId}`));
    },[dispatch, coinId]);

    const cryptoDetails = coinsState?.coins?.data?.coin;



    const stats = [
        { title: "Price to USD", value: `$ ${millify(parseInt(cryptoDetails?.price))}`, icon: <AiOutlineDollarCircle/> },
        { title: "Rank", value: cryptoDetails?.rank, icon: <AiOutlineFieldNumber/> },
        { title: "24h Volume", value: `$ ${millify(parseInt(cryptoDetails?.['24hVolume']))}`, icon: <AiOutlineThunderbolt/> },
        { title: "Market Cap", value: `$ ${millify(parseInt(cryptoDetails?.marketCap))}`, icon: <AiOutlineDollarCircle/> },
        { title: "All-time-high(daily avg.)", value: `$ ${millify(parseInt(cryptoDetails?.allTimeHigh?.price))}`, icon: <AiOutlineTrophy/> },
    ]

    const genericStats = [
        { title: "Number of Markets", value: cryptoDetails?.numberOfMarkets, icon: <AiOutlineFund/> },
        { title: "Number of Exchanges", value: cryptoDetails?.numberOfExchanges, icon: <AiOutlineMoneyCollect/> },
        { title: "Approved Supply", value: cryptoDetails?.supply?.confirmed ? <AiOutlineCheckCircle/> : <AiOutlineStop/>, icon: <AiOutlineExclamationCircle/> },
        { title: "Total Supply", value: `${millify(cryptoDetails?.supply?.total)}`, icon: <AiOutlineExclamationCircle/> },
        { title: "Circulating Supply", value: `${millify(cryptoDetails?.supply?.circulating)}`, icon: <AiOutlineExclamationCircle/> },
    ]

    return (
        <>
            {
                coinsState.loading ? <div className={style.loading}><Loading/></div> :

                <div className={style.container}>
                    <div className={style.header}>
                        <h2>{cryptoDetails?.name} ({cryptoDetails?.symbol})</h2>
                        <p>
                            {cryptoDetails?.name} live price in USD. View value statistics, market cap and supply.
                        </p>
                    </div>
                    
                    <div className={style.statsContainer}>
                        <div  className={style.statsChildContainer}>
                            <div>
                                <h2>{cryptoDetails?.name} Value statistics</h2>
                                <p>
                                    An overview showing the stats of {cryptoDetails?.name}, such as rank, trading valume and base and qute currency. 
                                </p>
                            </div>
                            {
                                stats.map(({icon, title, value}) => (
                                    <div key={title} className={style.valueContainer}>
                                        <div className={style.valueTitleContainer}>
                                            <span>{icon}</span>
                                            <span>{title}</span>
                                        </div>
                                        <span className={style.value}>{value}</span>
                                    </div>
                                ))
                            }
                        </div>

                        <div className={style.statsChildContainer}>
                            <div>
                                <h2>Other statistics</h2>
                                <p>
                                    An overview showing the stats of all cryptocurrencies, , such as rank, trading valume and base and qute currency. 
                                </p>
                            </div>
                            {
                                genericStats.map(({icon, title, value}) => (
                                    <div key={title} className={style.valueContainer}>
                                        <div className={style.valueTitleContainer}>
                                            <span>{icon}</span>
                                            <span>{title}</span>
                                        </div>
                                        <span className={style.value}>{value}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={style.bottomContainer}>
                        <div className={style.descContainer}>
                            <h3>What is {cryptoDetails?.name}?</h3>
                            {
                            HTMLReactParser(`${cryptoDetails?.description}`)
                            }
                        </div>
                        <div className={style.linkContainer}>
                            <h3>{cryptoDetails?.name} Links</h3>
                            {
                                cryptoDetails?.links?.map(link => (
                                    <div className={style.link} key={link?.name}>
                                        <h5>{link?.name}</h5>
                                        <a href={link?.url} target="_blank" rel="noreferrer">{link.name}</a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            }
        </>
    );
};

export default CryptoDetails;