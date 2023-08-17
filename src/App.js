import React from 'react';
import {  Routes, Route } from "react-router-dom";
import './App.css';
import ContactForm from './ContactForm';

function App()  {
  return (
  <>
    <Routes>
      <Route path="/" element = {<ContactForm/>}/>
      
    </Routes>
  </>
  )
  
  
};

export default App;
