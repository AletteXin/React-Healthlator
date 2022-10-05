import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HealthCardField from './HealthCardField';
import SymptomRow from './SymptomRow';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import "../i18n";

function UserInput({ setPreviousName, setPreviousId, setEntryRecorded }) {

    const { t, i18n } = useTranslation();

    const [inputName, setInputName] = useState("")
    const [inputId, setInputId] = useState("")

    const submitUser = (e) => {
        e.preventDefault()
        console.log(inputName)
        console.log(inputId)
        setPreviousName(inputName)
        setPreviousId(inputId)
        setEntryRecorded("False")
    };



    return (
        <div className="UserInputBox">
            <Container>

                <Container className="subBox">
                    <form onSubmit={(e) => submitUser(e)}>
                        <Row className="boxSubtitle">{t("retrieve.title")}</Row>

                        <Row className="fieldRow">
                            <Col className="fieldRow">{t("name.label")}</Col>
                            <Col className="inputField">
                                <label>
                                    <input
                                        className="inputBox"
                                        type="text"
                                        value={inputName}
                                        onChange={(e) => setInputName(e.target.value)}>
                                    </input>
                                </label>
                            </Col>
                        </Row>

                        <Row className="fieldRow">
                            <Col className="fieldRow">{t("formid.title")}</Col>
                            <Col className="inputField">
                                <label>
                                    <input
                                        className="inputBox"
                                        type="text"
                                        value={inputId}
                                        onChange={(e) => setInputId(e.target.value)}>
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
    );
}

export default UserInput;
