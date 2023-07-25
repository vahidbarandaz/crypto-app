import React, {useState, createContext} from 'react';

export const ClickContex = createContext();

const ClickProvider = ({children}) => {

    const [menu, setMenu] = useState();

    return (
        <ClickContex.Provider value={{menu, setMenu}}>
            {children}
        </ClickContex.Provider>
    );
};

export default ClickProvider;