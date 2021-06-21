import React, { useState } from "react";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import IntroPage from "./page/IntroPage";
import { Switch, Route, useLocation } from "react-router-dom";
import JournalPage from "./page/JournalPage";
import JournalLibrary from "./components/JournalLibrary";
import WorksessionPage from "./page/WorksessionPage";

function App() {
  const location = useLocation();
  const [libraryStatus, setLibraryStatus] = useState("false");

  return (
    <div className={`App ${libraryStatus ? "active-library" : ""}`}>
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/pulsate" exact>
          <IntroPage />
        </Route>
        <Route path="/Journal" exact>
          <JournalPage />
        </Route>
        <Route path="/Worksession" exact>
          <WorksessionPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
