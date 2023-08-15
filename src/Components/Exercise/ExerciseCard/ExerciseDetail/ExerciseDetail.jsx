import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BackButton from '../../../Assets/BackButton.png'
import { Link } from 'react-router-dom';
function ExerciseDetail() {
    const [description,setDescription]=useState(" ");
    const location=useLocation()
    const exercise=location.state?.exercise
    useEffect(()=>{
        if(exercise.bodyPart==="upper arms")
            setDescription(`The upper arm is located between the shoulder joint and elbow joint. It contains four muscles – three in the anterior compartment biceps brachii (long and short head of biceps), brachialis (near fore arms), coracobrachialis, and one in the posterior compartment triceps brachii (tricep). `)
        else if(exercise.bodyPart==="cardio")
          setDescription(`Cardio is any type of exercise that gets your heart rate up and keeps it up for a prolonged period of time. Your respiratory system will start working harder as you begin to breathe faster and more deeply.`)
        else if(exercise.bodyPart==="chest")
          setDescription(`The pectoral region is located on the anterior chest wall. It contains four muscles that exert a force on the upper limb: the pectoralis major (upper chest), pectoralis minor (middle portion of chest), serratus anterior (lower chest)and subclavius.`)
        else if(exercise.bodyPart==="lower arm")
          setDescription(`The forearm muscles are broadly divided into two compartments: the anterior flexor compartment and the posterior extensor compartment. Fascial layers define the boundaries of these compartments within the forearm. The deep fascia of the forearm encircles the musculature related to the ulna and radius.`)
        else if(exercise.bodyPart==="neck")
          setDescription(`You have more than 20 neck muscles, extending from the base of your skull and jaw down to your shoulder blades and collarbone. These muscles support and stabilize your head, neck and the upper part of your spine. They help you move your head in different directions and assist with chewing, swallowing and breathing.`)
        else if(exercise.bodyPart==="lower legs")
          setDescription(`Lateral muscles: The fibularis longus and fibularis brevis run along the outside (lateral part) of your lower leg. They start just below your knee and go down to your ankle. Posterior: The muscles in the posterior (back) of your lower leg are: Calf muscles, which include the gastrocnemius and the soleus.`)
        else if(exercise.bodyPart==="upper legs")
          setDescription(`Quadriceps include four large muscles located in the front of the thigh: vastus lateralis, vastus medialis, vastus intermedius, and rectus femoris. They start at the pelvis (hip bone) and femur (thigh bone) and extend down to the patella (kneecap) and tibia (shin bone).`)
        else if(exercise.bodyPart==="waist")
          setDescription(`The quadratus lumborum sits deep in the back waist, attaching to the top of the pelvis and traveling up to the last rib and the sides of the lumbar vertebrae. When the quadratus lumborum contracts, it pulls the pelvis and rib cage on the same side closer together. The abdominal obliques also help this action.`)
        else
          setDescription(`Regular exercise can have a positive impact on mental health, including depression, anxiety, and ADHD. It can also relieve stress, improve memory, help you sleep better, and boost your overall mood. `)
        
    },[])
  return (
    <div className='w-screen'>
      <Link to={"/exercise"}><img src={BackButton} alt="pooda venna" className='w-[35px] absolute top-12 left-12 hover:scale-[120%] ease-in-out duration-300 ' /></Link>
    <div className='md:flex md:justify-around sm:justify-center h-screen items-center w-screen p-16'>
         <img src={exercise.gifUrl} alt="" className='self-center w-fit md:w-[40%]'/>
         <div className='text-lg md:text-xl'>
            <div className='text-center mb-2 sm:text-base md:text-2xl font-bold pb-3'>{exercise.name.charAt(0).toUpperCase()+exercise.name.slice(1)}</div>
            <div className='max-w-lg'>
            <div className='text-black mb-2 font-normal'>Equipment:&nbsp;&nbsp;<span>{exercise.equipment.charAt(0).toUpperCase()+exercise.equipment.slice(1)}</span></div>
            <div className=' mb-3 text-black text-justify'>{description}</div>
            <div className='text-black font-medium bg-[#4da82f] rounded-full w-fit px-3 py-1 mb-2 cursor-pointer'>{exercise.bodyPart}</div>
            <div className='text-black font-medium bg-[#4da82f] rounded-full w-fit px-3 py-1 mb-2 cursor-pointer'>{exercise.target}</div>
            </div>  
        </div> 
    </div>
    </div>
  )
}

export default ExerciseDetail