import React from 'react'

import InfoCard from './InfoCard'
import img from'../assets/img.png'
function Home() {
  return (
    <>
    <h1>Home Component...!!!</h1>
     <InfoCard name="Priya" designation="Frontend Developer" color="yellow"/>
      <InfoCard name="Preet" designation="UI/UX Developer" color="blue"/>
      <InfoCard name="Riya" designation="Banckend Developer" color="pink"/>
      <InfoCard name="ABC"/><br/> 
      <img src={img} height={200} width={200}/>
    </>
  )
}

export default Home