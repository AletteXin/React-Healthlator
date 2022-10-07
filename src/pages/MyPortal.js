import Language from '../components/Language';
import Title from '../components/Title';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";
import { useState, useContext } from 'react';

import { LoginContext } from '../LoginContext';

function MyPortal() {

    const { t, i18n } = useTranslation();
    const [token, setToken] = useContext(LoginContext);

    const logout = (e) => {
        e.preventDefault();
        console.log("leggo");
        console.log(typeof token);
        console.log(token);
        setToken("");

    }


    return (


     
            <div className="blocks">
                <div className="App">
                    <div>
                        <Title />
                        <Language />
            <button onClick={(e) => logout(e)} > Logout </button>
                    
                </div>
                </div>
        </div>

    );
}

export default MyPortal;
