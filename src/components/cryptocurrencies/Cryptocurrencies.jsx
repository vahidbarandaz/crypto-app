import React from 'react';
import { Link } from "react-router-dom";
import millify from "millify";
import style from "./Cryptocurrencies.module.css";


const Cryptocurrencies = ({currency}) => {

    const { rank, name, iconUrl, price, marketCap, change , uuid} = currency;

    return (
        <div className={style.container}>

        <Link 
            to={`/crypto/${uuid}`} 
            style={{color: "black"}}
        >
                <div className={style.titleContainer}>
                    <h3><span>{rank}.</span> {name}</h3>
                    <img src={iconUrl} alt="currency"/>
                </div>
                <p className={style.text}>Price: {millify(price)}</p>
                <p  className={style.text}>Market Cap: {millify(marketCap)}</p>
                <p  className={style.text}>Daily Change: {millify(change)}%</p>
        </Link>
        </div>
    );
};

export default Cryptocurrencies;