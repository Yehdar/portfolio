import { useState } from "react";
import Sidenav from "./components/Sidenav.jsx";
import Main from "./components/Main.jsx";
import Work from "./components/Work.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
    </div>
  );
}

export default App;
