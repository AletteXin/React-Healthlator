import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HealthCardField from './HealthCardField';
import InputForm from './InputForm';
import SymptomRow from './SymptomRow';
import { useTranslation } from "react-i18next";
import "../i18n";

function HealthCard({previousName, previousId, entryRecorded, setEntryRecorded}) {

    const { t, i18n } = useTranslation();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [createdOn, setCreatedOn] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate, setBirthDate] = useState("");
    const [address, setAddress] = useState("");
    const [medications, setMedications] = useState("");
    const [relativeName, setRelativeName] = useState("");
    const [relativeNumber, setRelativeNumber] = useState("");
    const [reason, setReason] = useState("");
    const [error, setError] = useState("");
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
    const [diabetes, setDiabetes] = useState("False");
    const [highBlood, setHighBlood] = useState("False");
    const [highCholesterol, setHighCholesterol] = useState("False");
    const [asthma, setAsthma] = useState("False");
    const [kidneyDisease, setKidneyDisease] = useState("False");
    const [arthritis, setArthritis] = useState("False");
    const [pancreaticCancer, setPancreaticCancer] = useState("False");
    const [liverCancer, setLiverCancer] = useState("False");
    const [colorectalCancer, setColorectalCancer] = useState("False");
    const [COPD, setCOPD] = useState("False");
    const [depression, setDepression] = useState("False");
    const [lungCancer, setLungCancer] = useState("False");

    useEffect(() => {
        fetch('https://healthrecordalette.herokuapp.com/api/records/show', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                id: previousId,
                Name: previousName,
            })
        }).then(response => response.json().then(data => {
            console.log("Connected");
            console.log(data.record_details[0][0]["Gender"]);
            setError(data.record_details[0][0]['Errormessage']);
            setId(data.record_details[0][0]["id"]);
            setCreatedOn(data.record_details[0][0]["Createdon"]);
            setName(data.record_details[0][0]["Name"]);
            setGender(data.record_details[0][0]["Gender"]);
            setBirthDate(data.record_details[0][0]["Birthdate"]);
            setAddress(data.record_details[0][0]["Address"]);
            setMedications(data.record_details[0][0]["Medications"]);
            setRelativeName(data.record_details[0][0]["Nameofnextkin"]);
            setRelativeNumber(data.record_details[0][0]["Phoneofnextkin"]);
            setReason(data.record_details[0][0]['Reasonforvisit']);
            setFever(data.record_details[0][0]['Fever']);
            setHeadache(data.record_details[0][0]['Headache']);
            setNightChills(data.record_details[0][0]['Nightchills']);
            setSoreThroat(data.record_details[0][0]['Sorethroat']);
            setCough(data.record_details[0][0]['Cough']);
            setBreathingDiff(data.record_details[0][0]['Breathingdiff']);
            setDiarrhoea(data.record_details[0][0]['Diarrhoea']);
            setChestPain(data.record_details[0][0]['Chestpain']);
            setlegNumb(data.record_details[0][0]['Legnumbness']);
            setHandNumb(data.record_details[0][0]['Handnumbness']);
            setFaceNumb(data.record_details[0][0]['Facenumbness']);
            setAbdominalPain(data.record_details[0][0]['Abdominalpain']);
            setDiabetes(data.record_details[0][0]['Diabetes']);
            setHighBlood(data.record_details[0][0]['Highbloodpressure']);
            setHighCholesterol(data.record_details[0][0]['Highcholesterol']);
            setAsthma(data.record_details[0][0]['Asthma']);
            setKidneyDisease(data.record_details[0][0]['Kidneydisease']);
            setArthritis(data.record_details[0][0]['Arthritis']);
            setPancreaticCancer(data.record_details[0][0]['Pancreaticcancer']);
            setLiverCancer(data.record_details[0][0]['Livercancer']);
            setColorectalCancer(data.record_details[0][0]['Colorectalcancer']);
            setCOPD(data.record_details[0][0]['COPD']);
            setDepression(data.record_details[0][0]['Depression']);
            setLungCancer(data.record_details[0][0]['Lungcancer']);
        }))

    });

    console.log(name)
    console.log(previousId)
    console.log(previousName)
    console.log(error)


    const createNewForm = (e) => {
        window.location.reload();
    };

    return (
        <div>

            {/* {error != "" ?
                (<Container>
                    <p>{error}</p>
                    <InputForm setEntryRecorded={setEntryRecorded} entryRecorded={entryRecorded} />
                </Container>) */}
                {/* : ( */}
                    <div>
                    <div className="HealthCardBox">
                        <Container>

                            <Container className="subBox">
                                <Row className="boxSubtitle">{t("overview.title")}</Row>
                                <HealthCardField field={t("formid.title")} patientInfo={id} />
                                <HealthCardField field={t("name.label")} patientInfo={name} />
                            <HealthCardField field={t("createdon.label")} patientInfo={createdOn} />
                                {gender == "Female" ? (<Row className="fieldRow">
                                    <Col className="fieldRow">{t("gender.label")}</Col>

                                    <Col></Col><Col className="genderBox">{t("male.answer")}</Col>
                                    <Col className="genderBoxChosen">{t("female.answer")}</Col> </Row>) :
                                    (<Row className="fieldRow">
                                        <Col className="fieldRow">{t("gender.label")}</Col>
                                        <Col></Col><Col className="genderBoxChosen">{t("male.answer")}</Col>
                                        <Col className="genderBox">{t("female.answer")}</Col>  </Row>)}


                                <HealthCardField field={t("birthdate.label")} patientInfo={birthdate} />
                                <HealthCardField field={t("address.label")} patientInfo={address} />
                                <HealthCardField field={t("medications.label")} patientInfo={medications} />
                                <HealthCardField field={t("relativename.label")} patientInfo={relativeName} />
                                <HealthCardField field={t("relativenumber.label")} patientInfo={relativeNumber} />
                                <HealthCardField field={t("reason.label")} patientInfo={reason} />
                            </Container>

                            <Container className="subBox">
                                <Row className="boxSubtitle">{t("currentsymptoms.title")}</Row>
                                <SymptomRow firstSymptom={t("fever.label")} first={fever}
                                    secondSymptom={t("headache.label")} second={headache}
                                    thirdSymptom={t("nightchills.label")} third={nightChills} />
                                <SymptomRow firstSymptom={t("sorethroat.label")} first={soreThroat}
                                    secondSymptom={t("cough.label")} second={cough}
                                    thirdSymptom={t("breathing.label")} third={breathingDiff} />
                                <SymptomRow firstSymptom={t("diarrhoea.label")} first={diarrhoea}
                                    secondSymptom={t("chestpain.label")} second={chestPain}
                                    thirdSymptom={t("legnumb.label")} third={legNumb} />
                                <SymptomRow firstSymptom={t("handnumb.label")} first={handNumb}
                                    secondSymptom={t("facenumb.label")} second={faceNumb} 
                                    thirdSymptom={t("abdominalpain.label")} third={abdominalPain} />
                            </Container>

                            <Container className="subBox">
                                <Row className="boxSubtitle">{t("chronicconditions.title")}</Row>
                                <SymptomRow firstSymptom={t("diabetes.label")} first={diabetes}
                                    secondSymptom={t("highbloodpressure.label")} second={highBlood}
                                    thirdSymptom={t("highcholesterol.label")} third={highCholesterol} />
                                <SymptomRow firstSymptom={t("asthma.label")} first={asthma}
                                    secondSymptom={t("chronickidney.label")} second={kidneyDisease}
                                    thirdSymptom={t("arthritis.label")} third={arthritis} />
                                <SymptomRow firstSymptom={t("pancreaticcancer.label")} first={pancreaticCancer}
                                    secondSymptom={t("livercancer.label")} second={liverCancer}
                                    thirdSymptom={t("colorectalcancer.label")} third={colorectalCancer} />
                                <SymptomRow firstSymptom={t("copd.label")} first={COPD}
                                    secondSymptom={t("depression.label")} second={depression}
                                    thirdSymptom={t("lungcancer.label")} third={lungCancer} />
                            </Container>

                        </Container>
                    </div>
                    
                </div>
                {/* } */}

        </div>
    );
}

export default HealthCard;
