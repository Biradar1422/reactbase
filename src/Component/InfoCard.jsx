import React from 'react'

const InfoCard = ({name = "Felix",designation = "XYZ",color ="green"})  => {
  return (
    <>
    <div className='shadow border border-black w-[25%] flex-col justify-center items-center'>
    <h1 className='text-blue-900 font-serif text-3xl font-semibold'>{name}</h1>
    <h3 className="text-gray-600 font-light text-md">{designation}</h3>
    <p className='border border-red-600 w-72 text-gray-800 text-left' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vero veniam aut doloribus quam, ullam consequuntur, itaque voluptates sequi debitis optio obcaecati corporis repellat quae nobis accusantium atque officia necessitatibus.</p>
    {/* <button style={{backgroundColor:color}}>Know More...</button> */}
    <button className='w-[12vw] border shadow-lg m-2 p-2 bg-black text-white'>Know More...</button>
    </div>
    
    </>
  );
}

export default InfoCard