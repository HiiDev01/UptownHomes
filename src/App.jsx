import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import HouseProperty from './pages/HouseProperty';
import SingleProperty from './pages/SingleProperty';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/property' element={<HouseProperty/>}/>
          <Route exact path='/property/:id' element={<SingleProperty/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
