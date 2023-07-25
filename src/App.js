import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Provider } from 'react-redux';


//Context
import ClickProvider from './contexts/ClickProvider';

//Components
import Menu from './components/menu/Menu';
import Homepage from "./components/Homepage/Homepage";
import Exchanges from "./components/exchanges/Exchanges";
import CryptocurrenciesPage from "./components/cryptocurrenciesPage/CryptocurrenciesPage";
import CryptoDetails from "./components/crypto details/CryptoDetails";
import News from "./components/news/News";

//Redux
import store from './redux/store';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <ClickProvider>
      <Provider store={store}>
        <Menu/>
        <Navbar/>
        <div>{
          setTimeout(()=>{
            window.alert("please turn on your vpn")
          }, 1500)
          }</div>
        <div className='page-container'>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/exchanges' element={<Exchanges/>}/>
            <Route path='/cryptocurrencies' element={<CryptocurrenciesPage/>}/>
            <Route path='/crypto/:coinId' element={<CryptoDetails/>}/>
            <Route path='/news' element={<News/>}/>
          </Routes>
        </div>
      </Provider>
    </ClickProvider>
  );
};

export default App;