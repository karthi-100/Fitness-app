import React from 'react'
import { Link } from 'react-router-dom'
function ExerciseCard({exercises,name}) {
  return (
    <Link to={'/exerciseDetails'} state={{exercise:exercises}}>
    <div className='p-3 flex-cols items-center hover:scale-[104%] ease-in-out duration-150 hover:border border-black rounded cursor-pointer  '>
      <img src={exercises.gifUrl} alt="" />
      <div className='flex gap-8 justify-center'>
        <div className='bg-black rounded-full w-fit px-3 py-1'>{name}</div>
        <div className='text-black font-medium bg-[#4da82f] rounded-full w-fit px-3 py-1'>{exercises.bodyPart}</div>
      </div>
      <div className='text-black text-xl font-bold py-3 text-center  w-full pt-6'>{exercises.name.charAt(0).toUpperCase()+exercises.name.slice(1)}</div>
    </div>
    </Link>
  )
}

export default ExerciseCard