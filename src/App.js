import React from "react";
import JSXVariables from "./components/about/about.js";
import Contact from "./components/contact/contact.js";
import Foot from "./components/footer/footer.js";
import Navigation from "./components/navbar/navbar";

function App() {
  return (  
  <>
  <Navigation />
  <JSXVariables />
  <Contact />
  <Foot/>
  </>
  );
  
}

export default App;
