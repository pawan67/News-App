
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter ,
  Routes,
  Route
  
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state ={
    progress:0
  }
  setProgress =(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Routes>
          <Route  path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general"/>} />
          <Route path="/Business" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" category="business"/> }/>
          <Route path="/Entertainment"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" category="entertainment"/>} />
          <Route path="/General"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general"/>} />
          <Route path="/Health"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" category="health"/> }/>
          <Route path="/Science" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" category="science"/>} />
          <Route path="/Sports"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" category="sports"/>} />
          <Route path="/Technology" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" category="technology"/> }/>
          
        </Routes>
      </BrowserRouter> 
      </>
    )
  }
}

