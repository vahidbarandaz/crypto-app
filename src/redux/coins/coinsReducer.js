const initialState = {
    loading: true,
    coins: [],
    errors: ""
};

const coinsReducer = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_COINS_REQUEST":
            return{
                ...state, 
                loading: true
            }
        case "FETCH_COINS_SUCCESS":
            return{
                loading: false,
                coins: action.payload
            }
        case "FETCH_COINS_FAILURE":
            return{
                loading: false,
                errors: action.payload
            }
        default:
            return state;
    }
}

export default coinsReducer;