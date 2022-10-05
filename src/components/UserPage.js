import Language from './Language';
import Title from './Title';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";
import { useState } from 'react';

function UserPage() {

    const { t, i18n } = useTranslation();


    return (

        <div className="blocks">
            <div className="App">
                <div>
                    <Title />
                    <Language />

                </div>

            </div>
        </div>
    );
}

export default UserPage;
