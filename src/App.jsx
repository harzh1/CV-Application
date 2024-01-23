import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Seaction";
import Education from "./components/input/Builder/Education";

function App() {
  return (
    <>
      <Header></Header>
      <Education />
    </>
  );
}

export default App;
