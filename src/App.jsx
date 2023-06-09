import { useState } from "react";
import Sidenav from "./components/Sidenav.jsx";
import Main from "./components/Main.jsx";
import Work from "./components/Work.jsx";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
    </div>
  );
}

export default App;
