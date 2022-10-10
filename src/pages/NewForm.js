import Language from '../components/Language';
import InputForm from '../components/InputForm';
import Title from '../components/Title';
import React, { Suspense } from "react";



function NewForm({ previousName, setPreviousName, previousId, setPreviousId, entryRecorded,
    setEntryRecorded }) {

    return (

        <div className="blocks">


            <div className="App">

                <div>
                    <Title />
                    <Language />
                    <Suspense fallback={null}>

                        <InputForm entryRecorded={entryRecorded} setEntryRecorded={setEntryRecorded} />

                        <footer className="footer">

                        </footer>
                    </Suspense>
                </div>
            </div>

        </div>
    );
}

export default NewForm;
