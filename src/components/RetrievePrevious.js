import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HealthCard from './HealthCard';
import Language from './Language';
import InputForm from './InputForm';
import UserInput from './UserInput';
import Title from './Title';
import React, { Suspense, useState, useEffect } from "react";

function RetrievePrevious({ previousName, setPreviousName, previousId, setPreviousId, entryRecorded,
    setEntryRecorded }) {


    return (
        <div className="blocks">
            <div className="App">
                <div>
                <Title />
                <Language />
                <Suspense fallback={null}>
                    <UserInput previousName={previousName} setPreviousName={setPreviousName} previousId={previousId} setPreviousId={setPreviousId}
                        entryRecorded={entryRecorded} setEntryRecorded={setEntryRecorded} />
                    {previousName != "" ?
                        (<HealthCard previousName={previousName} previousId={previousId} entryRecorded={entryRecorded} setEntryRecorded={setEntryRecorded} />)
                        : (<InputForm entryRecorded={entryRecorded} setEntryRecorded={setEntryRecorded} />)}

                    <footer className="footer">

                    </footer>
                </Suspense>
                </div>
            </div>
        </div>
    );
}

export default RetrievePrevious;
