import React, { useEffect } from 'react';
import { useSelector,  useDispatch} from 'react-redux';
import millify from "millify";
import style from "./Exchanges.module.css";

//components
import Loading from "../Loading/Loading"

//Redux
import { fetchCoins } from '../../redux/coins/coinsAction';

const Exchanges = () => {

    const dispatch = useDispatch();
    const coinsState = useSelector(state => state.coinsState);

    useEffect(()=>{
        dispatch(fetchCoins('coins'));
    }, [dispatch])

    const coins = coinsState?.coins?.data?.coins;

    if(coinsState.loading) return <div className={style.loading}><Loading/></div>

    return (
        <div  className={style.container}>
            {
                coins?.map(coin => 
                    <div className={style.coinContainer} key={coin?.rank}>
                        <div className={style.titleContainer}>
                            <span>
                                {coin?.rank}.
                            </span>
                            <span>
                                <img style={{width:"30px"}} src={coin?.iconUrl} alt="o=icon" /> 
                            </span>
                            <span>{coin?.name}</span>
                        </div>
                        <span className={style.volume} title="24 Hours Volume">
                            { `$ ${millify(parseInt(coin?.['24hVolume']))}` }
                        </span>
                        <span className={style.market} title="Market Cap">
                            {millify(coin?.marketCap)}
                        </span>
                        <span className={coin?.change > 0 ? style.green : style.red} title="Price Change">
                            % {coin?.change}
                        </span>
                    </div>
                    )
            }
        </div>
    );
};

export default Exchanges;