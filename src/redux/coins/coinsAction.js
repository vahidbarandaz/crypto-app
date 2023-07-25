import axios from "axios";


const fetchCoinsRequest = () => {
    return {
        type: "FETCH_COINS_REQUEST"
    }
}
const fetchCoinsSuccess = coins => {
    return {
        type: "FETCH_COINS_SUCCESS",
        payload: coins
    }
}
const fetchCoinsFailure = errors => {
    return {
        type: "FETCH_COINS_FAILURE",
        payload: errors
    }
}

export const fetchCoins = (destination=`coins`) => {

    const options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/${destination}`,
        headers: {
          'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    }
    return (dispatch) => {
        dispatch(fetchCoinsRequest());
        axios.request(options)
            .then(response => {
                const coins = response.data;
                dispatch(fetchCoinsSuccess(coins))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchCoinsFailure(errorMessage))
            })
    }
}