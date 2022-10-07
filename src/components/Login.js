import Language from './Language';
import Title from './Title';
import SignUp from './SignUp';
import MyPortal from '../pages/MyPortal';
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
    const [loggedUsername, setLoggedUsername] = useState("")
    const [token, setToken] = useContext(LoginContext)
    const [errorMessage, setErrorMessage] = useState("")

    const loginUser = (e) => {
        e.preventDefault();
        fetch('https://healthrecordalette.herokuapp.com/api/user/show', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                Password: inputPassword,
                Username: inputUsername,
            })
        }).then(response => response.json().then(data => {
            console.log("Connected");
            setErrorMessage(data.login_details[0][0]['Errormessage']);
            setToken(data.login_details[0][0]["id"]);
            setLoggedUsername(data.login_details[0][0]["Username"]);
            console.log(typeof token);
            console.log(token);
            console.log(data.login_details[0][0]["id"]);
            

        }))

    }

    return (

        <div className="blocks">
            <div className="App">
                <div>
                    <Title />
                    <Language />

                    <div>

                        <div className="UserInputBox">
                            <div className="boxSubtitle">
                                LOGIN TO YOUR ACCOUNT
                </div>
                            <Container>

                                <Container className="subBox">
                                    <form onSubmit={(e) => loginUser(e)}>

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
                            {errorMessage}
                        </div>

                    New here?
                    <SignUp />
                    </div>

                </div>

            </div>
            <footer className="footer">

            </footer>
        </div >
    );
}

export default Login;
