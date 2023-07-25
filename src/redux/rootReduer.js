import { combineReducers } from "redux";
import coinsReducer from "./coins/coinsReducer";
import newsReducer from "./news/newsReducer";

const rootReducer = combineReducers({
    coinsState: coinsReducer,
    newsState: newsReducer
})

export default rootReducer;