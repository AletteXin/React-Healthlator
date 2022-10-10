import Language from '../components/Language';
import Title from '../components/Title';
import HealthCard from '../components/HealthCard';
import { useTranslation } from "react-i18next";
import { useState, useContext, useEffect } from 'react';

import { LoginContext } from '../LoginContext';

function MyPortal({setEntryRecorded, setPreviousName}) {

    const { t, i18n } = useTranslation();
    const [token, setToken] = useContext(LoginContext);
    const [records, setRecords] = useState([])

    useEffect(() => {
        fetch('https://healthrecordalette.herokuapp.com/api/user/showrecords', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                token: token,
            })
        }).then(response => response.json().then(data => {
            console.log("Connected");
            console.log(data.records);
            setRecords(data.records);
            console.log(records)
        }));

    });

    const logout = (e) => {
        e.preventDefault();
        setEntryRecorded("False")
        setPreviousName("False")
        setToken("");

    }



    return (

        <div className="blocks">
            <div className="App">
                <div>
                    <Title />
                    <Language />

                    {records.map((form, idx) => (
                        <div>
                            <HealthCard previousName={form[0].Name} previousId={form[0].id.toString()}
                                entryRecorded="True" />
                        </div>
                    ))}


                    <button class="submitbutton" onClick={(e) => logout(e)} > Logout </button>

                </div>
                <footer className="footer">

                </footer>
            </div>
        </div>

    );
}

export default MyPortal;
