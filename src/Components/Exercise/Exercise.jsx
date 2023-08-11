import ExerciseCard from "./ExerciseCard/ExerciseCard"
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate'
import BackButton from '../Assets/BackButton.png'
const Exercise=({data,name})=>{
    const [currentPage,setCurrentPage]=useState(1)
    const [exercisesPerPage] = useState(4)
    const indexOfLast=currentPage*exercisesPerPage;
    const indexOfFirstExercise = indexOfLast - exercisesPerPage;
    const currentExercises = data.slice(indexOfFirstExercise, indexOfLast);
       
    
    const handlePageChange=(e)=>{
        setCurrentPage(e.selected)
        console.log(currentPage);
        window.scrollTo({top:1800, behavior:'smooth'})
    }
return(
    <div>
       <Link to={"/"}><img src={BackButton} alt="pooda venna" className='w-[35px] absolute top-14 left-14 hover:scale-[120%] ease-in-out duration-300 ' /></Link>
    <div className=" py-10 w-full flex flex-wrap gap-20 justify-around">
        {currentExercises.map((d,index)=><ExerciseCard key={index} exercises={d} name={name} />)}
    </div>
    <div className="flex justify-around font-extrabold">
    {data.length>6 &&<ReactPaginate 
        nextLabel={<span className='text-2xl px-2 hover:scale-150 ease-in-out duration-200 '>{">"}</span>}
        renderOnZeroPageCount={null}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(data.length/exercisesPerPage)+1}
        previousLabel={<span className='text-2xl hover:scale-150  ease-in-out duration-200 px-2'>{"<"}</span>}
        containerClassName='flex gap-1 items-center p-4'
        pageClassName='text-xl text-black  p-3 py-1'
        activeClassName='bg-[#4da82f] rounded p-2'
        onPageChange={handlePageChange}
        />
    }   
    </div>
   
    </div>
)

}
export default Exercise