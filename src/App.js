import React,{useState} from 'react';
import './App.css';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Login from './components/Login/Login';
// import Cart from './components/Cart/Cart';
// import List from './components/List/List';


function App() {
  // const [cartValue,setCartValue]=useState([])

  return (
    <>
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Header />} />
      </Routes>
     
     
    </>
  );
}

export default App;

