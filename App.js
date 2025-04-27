import React from "react";
import ReactDOM from "react-dom/client"
import { Routes, Route, BrowserRouter } from "react-router";
import Login from "./src/components/Login";
import Signup from "./src/components/Signup";
import Home from "./src/components/Home";
import Header from "./src/components/Header";
import Body from "./src/components/Body"
import AddNotes from "./src/components/AddNotes";
import About from "./src/components/About";
import { useState } from "react";
import StudyMaterialHome from "./src/components/StudyMaterialHome";
import { useState } from "react";




const App = () => {
  const [notes, setNotes] = useState([]);
  return (
    <>
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/studyMaterial" element={<StudyMaterialHome notes={notes} ></StudyMaterialHome>}/>
        <Route path="/addNotes" element ={<AddNotes notes={notes} setNotes={setNotes}></AddNotes>}/>
      </Routes>
    </div> 
    </BrowserRouter>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
