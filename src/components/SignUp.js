
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";
import { useState, useContext } from 'react';

import { LoginContext } from '../LoginContext';

function SignUp() {

    const { t, i18n } = useTranslation();

    const [inputUsername, setInputUsername] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [inputRePassword, setInputRePassword] = useState("")
    const [message, setMessage] = useState("");

    const [token, setToken] = useContext(LoginContext)

    const createNewUser = (e) => {
        e.preventDefault()
        console.log("Connected")
        // fetch('https://healthrecordcommunicator.herokuapp.com/api/user/create', {
        fetch('https://healthrecordalette.herokuapp.com/api/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                Username: inputUsername,
                Password: inputPassword,
                RePassword: inputRePassword
            })
        }).then(response => response.json().then(data => {
            console.log("Connected")
            console.log(data.message)
            setMessage(data.message[0]);
        }))

        // setToken("True")
    };
    return (


        <div>
            <div className="subtitlelogin">
                {t("signup.title")}
                </div>


            <div className="UserInputBox">

                <Container>

                    <Container className="subBox">
                        <form onSubmit={(e) => createNewUser(e)}>

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
                            <Row className="fieldRow">
                                <Col className="fieldRow">{t("login.repassword")}</Col>
                                <Col className="inputField">
                                    <label>
                                        <input
                                            className="inputBox"
                                            type="text"
                                            value={inputRePassword}
                                            onChange={(e) => setInputRePassword(e.target.value)}>
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
                    <p> {message} </p>
                </Container>

            </div>
            <footer className="footer">

            </footer>

        </div>


    );
}

export default SignUp;
