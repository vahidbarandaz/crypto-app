import React, { useContext } from 'react';


//styles
import styled from 'styled-components';

//Context
import { ClickContex } from '../../contexts/ClickProvider';

const Div = styled.div `
    width: 2rem;
    height: 2rem;
    position: fixed;
    top 30px;
    right:30px;
    z-index: 10;
    display: none;
    cursor: pointer;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }
    div {
        width: 2rem;
        height: .25rem;
        background: #1a73e8;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all .3s linear;
        &:nth-child(1) {
            transform: ${props => props.menu ? "rotate(45deg)" : "rotate(0)"}
        }
        &:nth-child(2) {
            transform: ${props => props.menu ? "translateX(-100%)" : "translateX(0)"};
            opacity: ${props => props.menu ? 0 : 1}
        }
        &:nth-child(3) {
            transform: ${props => props.menu ? "rotate(-45deg)" : "rotate(0)"}
        }
    }
`


const Menu = () => {
    
    const {menu, setMenu} = useContext(ClickContex)
    
    return (
        <>
            <Div menu={menu} onClick={() => setMenu(menu => !menu)}>
                <div></div>
                <div></div>
                <div></div>
            </Div>
        </>
    );
}

export default Menu;