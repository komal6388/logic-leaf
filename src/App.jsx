import { Routes, Route } from "react-router-dom";
import { useState } from 'react'


// import './App.css'
import React from 'react'
import Header from './Components/Header'
import Home from './Components/Main/Home/Home'
import Footer from './Components/Footer'
import Head_Comp from './Components/Head_Comp'
import Contact_Us from "./Components/Main/Contact_Us";





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Head_Comp />}>
         <Route index element={<Home />} />
        <Route path="contactus" element={<Contact_Us />} />


        </Route>
      </Routes>
    </>


  )
}

export default App
