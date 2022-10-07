import Language from '../components/Language';
import Title from '../components/Title';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";
import { useState, useContext } from 'react';

import { LoginContext } from '../LoginContext';

function MyPortal({token, setToken}) {

    const { t, i18n } = useTranslation();
    
    const logout = () => {

        setToken("")

    }


    return (


                <div>

            <button onClick={(e) => logout(e)} > Logout </button>
                    
                </div>


    );
}

export default MyPortal;
