import React, {useContext} from 'react';
import { Link } from "react-router-dom";

//Icons
import {AiOutlineHome, AiOutlineFund, AiOutlineMoneyCollect, AiOutlineBulb} from "react-icons/ai";

//Context
import { ClickContex } from '../../contexts/ClickProvider';
//Styles
import "./Navbar.scss";

import styled from 'styled-components';
const Div = styled.div `
    @media (max-width: 768px) {
    transition: all .3s linear;
    transform: ${props => props.menu ? "translate(0)" : "translate(-250px)"};
}
`

const Navbar = () => {

    const {menu} = useContext(ClickContex);

    return (
        <Div 
            className='nav-container'
            menu={menu}
        >
            <div className="logo-container">
                <Link to="/">Crypto App</Link>
            </div>
            <div className='menu'>
                <Link to="/"><AiOutlineHome className='icon'/> Home</Link>
                <Link to="/cryptocurrencies"><AiOutlineFund className='icon'/> Cryptocurrencies</Link>
                <Link to="/exchanges"><AiOutlineMoneyCollect className='icon'/> Exchanges</Link>
                <Link to="/news"><AiOutlineBulb className='icon'/> News</Link>
            </div>
        </Div>
    );
};

export default Navbar;