import UserInput from '../components/UserInput';
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import Language from '../components/Language';
import Title from '../components/Title';
import HealthCard from '../components/HealthCard';
import "../i18n";

function RetrievePrevious({ previousName, setPreviousName, previousId, setPreviousId, entryRecorded,
    setEntryRecorded }) {


    const { t, i18n } = useTranslation();

    const clearForm = (e) => {
        setPreviousName("")
    };


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
                        (<div>
                                <div>{t("clearform.message")}</div>
                                <button onClick={(e) => clearForm(e)} className="submitbutton"> {t("reset.button")} </button>
                                <HealthCard previousName={previousName} previousId={previousId}
                            entryRecorded={entryRecorded} setEntryRecorded={setEntryRecorded} />
                            
                        </div>)
                            : (<div><footer className="footer">

                            </footer></div>)}
                    
                    <footer className="footer">

                    </footer>
                </Suspense>
                </div>
            </div>
        </div>
    );
}

export default RetrievePrevious;
