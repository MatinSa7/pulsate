import React from "react";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import IntroPage from "./page/IntroPage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <IntroPage />
    </div>
  );
}

export default App;
