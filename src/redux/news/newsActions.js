import axios from "axios";


const fetchNewsRequest = () => {
    return {
        type: "FETCH_NEWS_REQUEST"
    }
}
const fetchNewsSuccess = news => {
    return {
        type: "FETCH_NEWS_SUCCESS",
        payload: news
    }
}
const fetchNewsFailure = errors => {
    return {
        type: "FETCH_NEWS_FAILURE",
        payload: errors
    }
}

export const fetchNews = (newsCategory, count) => {

    const options = {
        method: 'GET',
        url: `https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}`,
        params: {safeSearch: 'Off', textFormat: 'Raw', freshness: 'Day', count},
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': `${process.env.REACT_APP_NEWS_API_KEY}`,
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };
    return (dispatch) => {
        dispatch(fetchNewsRequest());
        axios.request(options)
            .then(response => {
                const news = response.data;
                dispatch(fetchNewsSuccess(news))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchNewsFailure(errorMessage))
            })
    }
}