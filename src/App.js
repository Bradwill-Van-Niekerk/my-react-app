import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Start from './Pages/Home.js'
import About from './Pages/about.js'
import UserProfile from './Pages/UserProfile.js'
import {SignIn} from './Pages/signin.js'
import WelcomePage from './Pages/welcome.js';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/home'} element={<Start/>}/>
      <Route path={"/about"} element= {<About/>}/>
      <Route path={"/user/:username" }element = {<UserProfile/>}/>
      <Route path={"/"} element = {<SignIn/>}/>
      <Route path={"/welcome"} element = {<WelcomePage/>}/>
 
    </Routes>
    </BrowserRouter>
  );
}


