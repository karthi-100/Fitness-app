import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
function ExerciseDetail() {
    const [description,setDescription]=useState(" ");
    const location=useLocation()
    const exercise=location.state?.exercise
    useEffect(()=>{
        if(exercise.bodyPart==="upper arms"){
            setDescription(`The upper arm is located between the shoulder joint and elbow joint. It contains four muscles – three in the anterior compartment (biceps brachii, brachialis, coracobrachialis), and one in the posterior compartment (triceps brachii). `)
        }
    },[])
  return (
    
    <div className='md:flex md:justify-around sm:justify-center h-screen items-center w-screen p-16'>
         <img src={exercise.gifUrl} alt="" className='self-center w-full md:w-[40%]'/>
         <div className='text-lg md:text-xl'>
            <div className='text-center text-black mb-2 sm:text-base md:text-2xl font-bold pb-3'>{exercise.name.charAt(0).toUpperCase()+exercise.name.slice(1)}</div>
            <div className='max-w-lg'>
            <div className='text-black mb-2 '>Equipment:  <span>{exercise.equipment}</span></div>
            <div className=' mb-3 text-justify'>{description}</div>
            <div className='text-black font-medium bg-[#4da82f] rounded-full w-fit px-3 py-1 mb-2'>{exercise.bodyPart}</div>
            <div className='text-black font-medium bg-[#4da82f] rounded-full w-fit px-3 py-1 mb-2'>{exercise.target}</div>
            </div>  
        </div> 
    </div>
    
  )
}

export default ExerciseDetail