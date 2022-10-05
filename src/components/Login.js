import Language from './Language';
import Title from './Title';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";
import { useState, useContext } from 'react';

import { LoginContext } from '../LoginContext';

function Login() {

    const { t, i18n } = useTranslation();

    const [inputUsername, setInputUsername] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    const [token, setToken] = useContext(LoginContext)

    const loginUser = () => {

        fetch('https://whispering-wildwood-06588.herokuapp.com/user_login', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: inputPassword,
                username: inputUsername,
            })
        }).then(response => response.json().then(data => {
            setToken(data.user_id);
        }))

    }

    return (

        <div className="blocks">
            <div className="App">
                <div>
                    <Title />
                    <Language />


                    <div className="UserInputBox">
                        <div className="boxSubtitle">
                            LOGIN TO YOUR ACCOUNT
                </div>
                        <Container>

                            <Container className="subBox">
                                <form onSubmit={(e) => loginUser()}>

                                    <Row className="boxSubtitle"></Row>

                                    <Row className="fieldRow">
                                        <Col className="fieldRow">{t("login.username")}</Col>
                                        <Col className="inputField">
                                            <label>
                                                <input
                                                    className="inputBox"
                                                    type="text"
                                                    value={inputUsername}
                                                    onChange={(e) => setInputUsername(e.target.value)}>
                                                </input>
                                            </label>
                                        </Col>
                                    </Row>

                                    <Row className="fieldRow">
                                        <Col className="fieldRow">{t("login.password")}</Col>
                                        <Col className="inputField">
                                            <label>
                                                <input
                                                    className="inputBox"
                                                    type="text"
                                                    value={inputPassword}
                                                    onChange={(e) => setInputPassword(e.target.value)}>
                                                </input>
                                            </label>
                                        </Col>
                                    </Row>
                                    <input
                                        type="submit"
                                        value={t("submit.title")}
                                        className="submitbutton"
                                    />
                                </form>
                            </Container>

                        </Container>

                    </div>


                </div>

            </div>
        </div >
    );
}

export default Login;
