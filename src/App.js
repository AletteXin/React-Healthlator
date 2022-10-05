import "./i18n";
import React, { Suspense, useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import NewForm from './components/NewForm';
import LeftNav from './components/LeftNav';
import UserPage from './components/UserPage';
import RetrievePrevious from './components/RetrievePrevious';

function App() {

  const [token, setToken] = useState("");

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
            <Route path="/main">
            { token == "" ?  <Login /> : <UserPage />}
              
            </Route>
            <Route path="/retrieveprevious">
              <RetrievePrevious previousName={previousName} setPreviousName={setPreviousName}
                previousId={previousId} setPreviousId={setPreviousId}
                entryRecorded={entryRecorded} setEntryRecorded={setEntryRecorded} />
            </Route>
          </Switch>


        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
