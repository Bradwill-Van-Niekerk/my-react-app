import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav.js'
import React from 'react';
import Start from './Pages/Home.js'
import About from './Pages/about.js'
import UserProfile from './Pages/UserProfile.js'
import Signup from './Components/Signup-Signin.js'

export default function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Signup/>
    <Routes>
      <Route path={'/'} element={<Start/>}/>
      <Route path={"/about"} element= {<About/>}/>
      <Route path={"/user/:username" }element = {<UserProfile/>}/>
    </Routes>
    </BrowserRouter>
  );
}


