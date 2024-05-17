import React from 'react'
import Background from './background/Background';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Center from './components/center/Center';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Services from './components/services/Services';
import { useState } from 'react';
import "./App.css"


function App(){

  let info=[
  {
  text1:"Sustaining Forests", 
  text2:"Securing Features",
  },
  {
  text1:" Growing Greener", 
  text2:"Harvesting Responsibility",
  },
  {
  text1:" Stewards of The Forest",
  text2:" Champions of Feature",
  },
  {
  text1:" Planting Today",
  text2:"Thriving Tomorrow",
  }

  ];
  
const [count, setCount]=useState(2);
const [text, setText]=useState(true);


  return (
    <>
      <Navbar  count={count} setCount={setCount} text={text} setText={setText}/>
      <Background count={count}/>
      <Center info={info[count]}/>
      <About/>
      <Services/>
      <Contacts/>
    <Footer/>
    </>
    
  )
}

export default App;



