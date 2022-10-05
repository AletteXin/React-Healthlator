import React, { useState, createContext } from 'react';

const LoginContext = createContext([{}, () => { }]);

const LoginProvider = (props) => {
    const [token, setToken] = useState("");
    return (
        <LoginContext.Provider value={[token, setToken]}>
            {props.children}
        </LoginContext.Provider>
    );
};

export { LoginContext, LoginProvider };
