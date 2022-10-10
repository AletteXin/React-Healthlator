import { useState, useContext} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HealthCardField from './HealthCardField';
import ChooseSymptom from './ChooseSymptom';
import { useTranslation } from "react-i18next";
import "../i18n";
import { LoginContext } from '../LoginContext';

function InputForm({ setEntryRecorded, entryRecorded }) {


    const { t, i18n } = useTranslation();
    const [token, setToken] = useContext(LoginContext);

    const [name, setName] = useState("");
    const [gender, setGender] = useState('Female');
    const [birthdate, setBirthDate] = useState("");
    const [address, setAddress] = useState("");
    const [medications, setMedications] = useState("");
    const [relativeName, setRelativeName] = useState("");
    const [relativeNumber, setRelativeNumber] = useState("");
    const [reason, setReason] = useState("");
    const [message, setMessage] = useState("");
    const [fever, setFever] = useState("False");
    const [headache, setHeadache] = useState("False");
    const [nightChills, setNightChills] = useState("False");
    const [soreThroat, setSoreThroat] = useState("False");
    const [cough, setCough] = useState("False");
    const [breathingDiff, setBreathingDiff] = useState("False");
    const [diarrhoea, setDiarrhoea] = useState("False");
    const [chestPain, setChestPain] = useState("False");
    const [legNumb, setlegNumb] = useState("False")
    const [handNumb, setHandNumb] = useState("False");
    const [faceNumb, setFaceNumb] = useState("False");
    const [abdominalPain, setAbdominalPain] = useState("False");
    const [vomit, setVomit] = useState("False");
    const [dizziness, setDizziness] = useState("False");
    const [sleepingDiff, setSleepingDiff] = useState("False");
    const [diabetes, setDiabetes] = useState("False");
    const [highBlood, setHighBlood] = useState("False");
    const [highCholesterol, setHighCholesterol] = useState("False");
    const [asthma, setAsthma] = useState("False");
    const [kidneyDisease, setKidneyDisease] = useState("False");
    const [arthritis, setArthritis] = useState("False");
    const [cancer, setCancer] = useState("False");
    const [liverDisease, setLiverDisease] = useState("False");
    const [stroke, setStroke] = useState("False");
    const [COPD, setCOPD] = useState("False");
    const [depression, setDepression] = useState("False");
    const [alzheimer, setAlzheimer] = useState("False");

    const [maleGenderStyle, setMaleGenderStyle] = useState("genderBox")
    const [femaleGenderStyle, setFemaleGenderStyle] = useState("genderBoxChosen")

    const submitNewEntry = (e) => {
        e.preventDefault()
        fetch('https://healthrecordalette.herokuapp.com/api/records/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                ID: token,
                Name: name,
                Gender: gender,
                Birthdate: birthdate,
                Address: address,
                Medications: medications,
                Nameofnextkin: relativeName,
                Phoneofnextkin: relativeNumber,
                Reasonforvisit: reason,
                Fever: fever,
                Headache: headache,
                Nightchills: nightChills,
                Sorethroat: soreThroat,
                Cough: cough,
                Breathingdiff: breathingDiff,
                Diarrhoea: diarrhoea,
                Chestpain: chestPain,
                Legnumbness: legNumb,
                Handnumbness: handNumb,
                Facenumbness: faceNumb,
                Abdominalpain: abdominalPain,
                Vomit: vomit, 
                Dizziness: dizziness,
                Sleepingdiff: sleepingDiff,
                Diabetes: diabetes,
                Highbloodpressure: highBlood,
                Highcholesterol: highCholesterol,
                Asthma: asthma,
                Kidneydisease: kidneyDisease,
                Arthritis: arthritis,
                Cancer: cancer,
                Liverdisease: liverDisease,
                Stroke: stroke,
                COPD: COPD,
                Depression: depression,
                Alzheimer: alzheimer,
            })
        }).then(response => response.json().then(data => {
            console.log("Connected")
            console.log(data.message)
            setMessage(data.message[0]);
        }))

        setEntryRecorded("True")
    };

    const createNewForm = (e) => {
        setEntryRecorded("False");
    };


    const changeToMaleGenderStyle = () => {

        setMaleGenderStyle("genderBoxChosen")
        setFemaleGenderStyle("genderBox")
        setGender("Male")
    }

    const changeToFemaleGenderStyle = () => {

        setMaleGenderStyle("genderBox")
        setFemaleGenderStyle("genderBoxChosen")
        setGender("Female")

    }



    return (
        <div>
            <Row className="subtitle">{t("newentry.title")}</Row>
        <div className="HealthCardBox">
                
            <Container>
                    
                {entryRecorded == "False" ?
                    (<form onSubmit={(e) => submitNewEntry(e)}>
                        <Container className="subBox">
                                <Row className="boxSubtitle">{t("overview.title")}</Row>

                            <Row className="fieldRow">
                                <Col className="fieldRow">{t("name.label")}</Col>
                                <Col className="inputField">
                                    <label>
                                        <input
                                            className="inputBox"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}>
                                        </input>
                                    </label>
                                </Col>
                            </Row>

                            <Row className="fieldRow">
                                <Col className="fieldRow">{t("gender.label")}</Col>
                                {/* <Col className="inputField">
                                    <label>
                                        <select
                                            placeholder="Choose"
                                            value={gender}
                                            autosize={false}
                                            onChange={(e) => setGender(e.target.value)}>
                                            <option disabled hidden value=''></option>
                                            <option value="Male"> {t("male.answer")}</option>
                                            <option value="Female"> {t("female.answer")}</option>
                                        </select>
                                    </label>
                                </Col> */}
                                <Col ></Col>
                                <Col className={maleGenderStyle} onClick={changeToMaleGenderStyle}>{t("male.answer")}</Col>
                                <Col className={femaleGenderStyle} onClick={changeToFemaleGenderStyle}>{t("female.answer")}</Col>

                            </Row>

                            <Row className="fieldRow">
                                <Col className="fieldRow">{t("birthdate.label")}</Col>
                                <Col className="inputField">
                                    <label>
                                        <DatePicker
                                            selected={birthdate}
                                            onChange={birthdate => setBirthDate(birthdate)}
                                            className="inputBox" />
                                    </label>
                                </Col>
                            </Row>

                            <Row className="fieldRow">
                                <Col className="fieldRow">{t("address.label")}</Col>
                                <Col className="inputField">
                                    <label>
                                        <textarea
                                            className="inputBox"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}>
                                        </textarea>
                                    </label>
                                </Col>
                            </Row>

                            <Row className="fieldRow">
                                <Col className="fieldRow">{t("medications.label")}</Col>
                                <Col className="inputField">
                                    <label>
                                        <textarea
                                            className="inputBox"
                                            value={medications}
                                            onChange={(e) => setMedications(e.target.value)}>
                                        </textarea>
                                    </label>
                                </Col>
                            </Row>

                            <Row className="fieldRow">
                                <Col className="fieldRow">{t("relativename.label")}</Col>
                                <Col className="inputField">
                                    <label>
                                        <input
                                            className="inputBox"
                                            type="text"
                                            value={relativeName}
                                            onChange={(e) => setRelativeName(e.target.value)}>
                                        </input>
                                    </label>
                                </Col>
                            </Row>

                            <Row className="fieldRow">
                                <Col className="fieldRow">{t("relativenumber.label")}</Col>
                                <Col className="inputField">
                                    <label>
                                        <input
                                            className="inputBox"
                                            type="text"
                                            value={relativeNumber}
                                            onChange={(e) => setRelativeNumber(e.target.value)}>
                                        </input>
                                    </label>
                                </Col>
                            </Row>

                            <Row className="fieldRow">
                                <Col className="fieldRow">{t("reason.label")}</Col>
                                <Col className="inputField">
                                    <label>
                                        <textarea
                                            className="inputBox"
                                            value={reason}
                                            onChange={(e) => setReason(e.target.value)}>
                                        </textarea>
                                    </label>
                                </Col>
                            </Row>


                        </Container>
                        <Container className="subBox">
                            <Row className="boxSubtitle">{t("currentsymptoms.title")}</Row>
                            <ChooseSymptom firstSymptom={t("fever.label")} setFirst={setFever}
                                secondSymptom={t("headache.label")} setSecond={setHeadache}
                                thirdSymptom={t("nightchills.label")} setThird={setNightChills} />
                            <ChooseSymptom
                                firstSymptom={t("sorethroat.label")} setFirst={setSoreThroat}
                                secondSymptom={t("cough.label")} setSecond={setCough}
                                thirdSymptom={t("breathing.label")} setThird={setBreathingDiff} />
                            <ChooseSymptom firstSymptom={t("diarrhoea.label")} setFirst={setDiarrhoea}
                                secondSymptom={t("chestpain.label")} setSecond={setChestPain}
                                thirdSymptom={t("legnumb.label")} setThird={setlegNumb} />
                            <ChooseSymptom firstSymptom={t("handnumb.label")} setFirst={setHandNumb}
                                secondSymptom={t("facenumb.label")} setSecond={setFaceNumb}
                                thirdSymptom={t("abdominalpain.label")} setThird={setAbdominalPain} />
                            <ChooseSymptom firstSymptom={t("vomit.label")} setFirst={setVomit}
                                secondSymptom={t("dizziness.label")} setSecond={setDizziness}
                                thirdSymptom={t("sleeping.label")} setThird={setSleepingDiff} />

                        </Container>

                        <Container className="subBox">
                            <Row className="boxSubtitle">{t("chronicconditions.title")}</Row>
                            <ChooseSymptom firstSymptom={t("diabetes.label")} setFirst={setDiabetes}
                                secondSymptom={t("highbloodpressure.label")} setSecond={setHighBlood}
                                thirdSymptom={t("highcholesterol.label")} setThird={setHighCholesterol} />
                            <ChooseSymptom firstSymptom={t("asthma.label")} setFirst={setAsthma}
                                secondSymptom={t("chronickidney.label")} setSecond={setKidneyDisease}
                                thirdSymptom={t("arthritis.label")} setThird={setArthritis} />
                            <ChooseSymptom firstSymptom={t("cancer.label")} setFirst={setCancer}
                                secondSymptom={t("liverdisease.label")} setSecond={setLiverDisease}
                                thirdSymptom={t("stroke.label")} setThird={setStroke} />
                            <ChooseSymptom firstSymptom={t("copd.label")} setFirst={setCOPD}
                                secondSymptom={t("depression.label")} setSecond={setDepression}
                                thirdSymptom={t("alzheimer.label")} setThird={setAlzheimer} />
                        </Container>

                        <input type="submit" value={t("submit.title")} className="submitbutton" />
                    </form>)
                    : (<Container>
                        <p>{t("formcreated.message")} {message}</p>

                        <button onClick={(e) => createNewForm(e)} className="submitbutton">{t("newentry.label")}</button>

                    </Container>
                    )}
            </Container>

        </div>
        </div>
    );
}

export default InputForm;



// return (
//     <div className="HealthCardBox">
//         <Container>
//             <form onSubmit={handleSubmit}>
//                 <Container className="subBox">
//                     <Row className="boxSubtitle">OVERVIEW</Row>
//                     <HealthCardField field="ID" patientInfo="999999" />
//                     <HealthCardField field={t("gender.label")} patientInfo={t("male.answer")} />
//                     <HealthCardField field={t("birthdate.label")} patientInfo="01/01/1950" />
//                     <HealthCardField field={t("medications.label")} patientInfo="Adezio" />
//                     <HealthCardField field="Diabetic" patientInfo="No" />
//                     <HealthCardField field="Smoker" patientInfo="Yes" />
//                     <HealthCardField field={t("others.label")} patientInfo="High blood pressure" />
//                     <HealthCardField field={t("reason.label")} patientInfo="To get X-ray chest scan" />
//                 </Container>
//                 <Container className="subBox">
//                     <Row className="boxSubtitle">SYMPTOMS</Row>
//                     <SymptomRow firstSymptom={t("fever.label")} secondSymptom={t("headache.label")} thirdSymptom={t("nightchills.label")} />
//                     <SymptomRow firstSymptom={t("sorethroat.label")} secondSymptom={t("cough.label")} thirdSymptom={t("breathing.label")} />
//                     <SymptomRow firstSymptom={t("diarrhoea.label")} secondSymptom={t("chestpain.label")} thirdSymptom={t("legnumb.label")} />
//                     <SymptomRow firstSymptom={t("handnumb.label")} secondSymptom={t("facenumb.label")} />

//                 </Container>
//                 <input type="submit" value="Submit" />
//             </form>
//         </Container>

//     </div>
// );