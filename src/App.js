import "./i18n";
import React, { useState, useEffect, useContext } from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import NewForm from './pages/NewForm';
import LeftNav from './components/LeftNav';
import MyPortal from './pages/MyPortal';
import RetrievePrevious from './pages/RetrievePrevious';
import { LoginContext } from './LoginContext';

function App() {

  const [token, setToken] = useContext(LoginContext);

  const [previousName, setPreviousName] = useState("");
  const [previousId, setPreviousId] = useState("");
  const [entryRecorded, setEntryRecorded] = useState("False")

  console.log(previousName)
  console.log(previousId)

  useEffect(() => {
    document.title = "Healthlator"
  }, [])


  return (

    <div>
      <BrowserRouter>
        <LeftNav />
        <div>
          <Switch>
            <Route path="/newform">
              <NewForm previousName={previousName} setPreviousName={setPreviousName}
                previousId={previousId} setPreviousId={setPreviousId}
                entryRecorded={entryRecorded} setEntryRecorded={setEntryRecorded} />
            </Route>

            <Route path="/retrieveprevious">
              <RetrievePrevious previousName={previousName} setPreviousName={setPreviousName}
                previousId={previousId} setPreviousId={setPreviousId}
                entryRecorded={entryRecorded} setEntryRecorded={setEntryRecorded} />
            </Route>

            <Route path="/">
              {token != "" ? <MyPortal setEntryRecorded= {setEntryRecorded} setPreviousName = {setPreviousName} /> : <Login /> }

            </Route>

          </Switch>


        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
