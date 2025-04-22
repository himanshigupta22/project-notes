import React from "react";
import ReactDOM from "react-dom/client"
import { Routes, Route, BrowserRouter } from "react-router";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Header from "./components/Header";
import Body from "./components/Body"
import AddNotes from "./components/AddNotes";
import About from "./components/About";
import  Items from './components/Items';

const App = () => {
  return (
    <BrowserRouter>
    <div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addnotes" element={<AddNotes />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/item" element={<Items></Items>}></Route>
      </Routes>
    </div> 
    </BrowserRouter>
    // <Items/>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
