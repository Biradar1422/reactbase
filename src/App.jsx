import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import InfoCard from './Component/InfoCard';
import Home from './Component/Home';
import Login from './Component/Login'
import NavbarComp from './Component/NavbarComp';
function App() {

  // const username =   window.prompt("Enter Username:");
  // const password = parseInt(window.prompt("Enter Password:"));

  // //parseInt to convert string to no (===)

  // return username === "Priya" && password === 123 ? <Home/> : <Login/>;

  //terrnaey operator = condition ? true : false;

  // if(username == "Priya" && password == 123){
  //   return(
  //     <>
  //     <Home/>
  //     </>
  //   )
  // }
  // else{
  //   return(
  //     <>
  //     <Login/>
  //     </>
  //   )
  // }
  

  // return (
  //   <>
  //     {/* <InfoCard name="Priya" designation="Frontend Developer" color="yellow"/>
  //     <InfoCard name="Preet" designation="UI/UX Developer" color="blue"/>
  //     <InfoCard name="Riya" designation="Banckend Developer" color="pink"/>
  //     <InfoCard name="ABC"/> */}
  //   </>
  // )


  return(
    <>
    <NavbarComp/>
    <Home/>
    </>
  )
}

export default App
