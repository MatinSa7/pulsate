import React from "react";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import IntroPage from "./page/IntroPage";
import { Switch, Route, useLocation } from "react-router-dom";
import JournalPage from "./page/JournalPage";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/pulsate" exact>
          <IntroPage />
        </Route>
        <Route path="/Journal" exact>
          <JournalPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
