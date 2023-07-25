import React, {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import style from "./CryptocurrenciesPage.module.css";

//Redux
import { fetchCoins } from "../../redux/coins/coinsAction";

//Components
import Cryptocurrencies from '../cryptocurrencies/Cryptocurrencies';
import Loading from '../Loading/Loading';

const CryptocurrenciesPage = () => {
    
    const [search, setSearch] = useState("");


    const dispatch = useDispatch();
    const coinsState = useSelector(state => state.coinsState);

    useEffect(() => {
        dispatch(fetchCoins());
    }, [dispatch])

    console.log(coinsState);

    const currencies = coinsState?.coins?.data?.coins;

    const searchCurrencies = currencies?.filter(currency => currency.name.toLowerCase().includes(search.toLowerCase()));

    if(coinsState.loading) return <div className={style.loading}><Loading/></div>

    return (
        <div className={style.container}>
            <div className={style.inputContainer}>
                <input 
                type="text" 
                placeholder='Search'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            </div>
            <div className={style.cryptoContainer}>
                {  
                    searchCurrencies?.map(currency => <Cryptocurrencies key={currency.uuid} currency={currency}/>)
                }
            </div>
        </div>
    );
};

export default CryptocurrenciesPage;