import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();

function GlobalContextProvider (props) {
    const [isEng, setEng] = useState(true);


    return (
        <GlobalContext.Provider value={{isEng, setEng}}>
            { props.children }
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;