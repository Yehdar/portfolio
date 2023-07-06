import { useState } from "react";
import Sidenav from "./components/Sidenav.jsx";
import Main from "./components/Main.jsx";
import Work from "./components/Work.jsx";
import Rewrites from "./components/Rewrites.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="bg-gray-900">
      <Sidenav />
      <Main />
      <Work />
      <Rewrites />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
