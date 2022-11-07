
import React from 'react'
import Navbar from './components/Navbar';
import { useState } from 'react';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter ,
  Routes,
  Route
  
} from "react-router-dom";

function App() {
  let apiKey = process.env.REACT_APP_NEWS_API
  const [pg, setpg] = useState("0")
 
  function setProgress(progress){
    setpg(progress)
  }
  
    return (
      <>
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={pg}
        
      />
        <Routes>
        <Route  path="/News-App" element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="in" category="general"/>} />
          <Route  path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="in" category="general"/>} />
          <Route path="/Business" element={ <News setProgress={setProgress} apiKey={apiKey} key="business" country="in" category="business"/> }/>
          <Route path="/Entertainment"  element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" country="in" category="entertainment"/>} />
          <Route path="/General"  element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="in" category="general"/>} />
          <Route path="/Health"  element={<News setProgress={setProgress} apiKey={apiKey} key="health" country="in" category="health"/> }/>
          <Route path="/Science" element={ <News setProgress={setProgress} apiKey={apiKey} key="science" country="in" category="science"/>} />
          <Route path="/Sports"  element={<News setProgress={setProgress} apiKey={apiKey} key="sports" country="in" category="sports"/>} />
          <Route path="/Technology" element={ <News setProgress={setProgress} apiKey={apiKey} key="technology" country="in" category="technology"/> }/>
          
        </Routes>
      </BrowserRouter> 
      </>
    )
  }

export default App
