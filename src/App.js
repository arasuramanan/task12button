
import './App.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
import DetailsList from './Components/DetailsList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
   {/* <Header /> */}
   <Routes> 
   <Route path='/' element={<DetailsList />}/> 
 
    
   </Routes> 
   {/* <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
