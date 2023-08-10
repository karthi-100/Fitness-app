import { useEffect,useState } from "react"
import {exerciseOptions,fetchData} from "../../../utils/Server"
import SearchCard from "./SearchCard/SearchCard";
import Exercise from "../../Exercise/Exercise";
import Gifs from '../../Assets/Gifs.gif'
const SearchExercise=()=>{
    const [name,setName]=useState("");
    const [exercises,setExercises]=useState([{bodyPart: 'upper arms', equipment: 'dumbbell 1', gifUrl: `${Gifs}`, id: '0333', name: 'dumbbell 1',target:"kav"},
    {bodyPart: 'upper arms', equipment: 'dumbbell', gifUrl: `${Gifs}`, id: '0333', name: 'dumbbell 2',target:"kav"},
    {bodyPart: 'upper arms', equipment: 'dumbbell', gifUrl: `${Gifs}`, id: '0333', name: 'dumbbell 3',target:"kav"},
    {bodyPart: 'upper arms', equipment: 'dumbbell', gifUrl: `${Gifs}`, id: '0333', name: 'dumbbell 4',target:"kav"},
    {bodyPart: 'upper arms', equipment: 'dumbbell', gifUrl: `${Gifs}`, id: '0333', name: 'dumbbell 5',target:"kav"}
    ,{bodyPart: 'upper arms', equipment: 'dumbbell', gifUrl: `${Gifs}`, id: '0333', name: 'dumbell 6',target:"kav"},
    {bodyPart: 'upper arms', equipment: 'dumbbell', gifUrl: `${Gifs}`, id: '0333', name: 'dumbbell 7',target:"kav"},
    {bodyPart: 'upper arms', equipment: 'dumbbell', gifUrl: `${Gifs}`, id: '0333', name: 'dumbbell 8',target:"kav"},
    {bodyPart: 'upper arms', equipment: 'dumbbell', gifUrl: `${Gifs}`, id: '0333', name: 'dumbbell 9',target:"kav"}
    ])
    const [bodyPart,setBodyPart]=useState([])
    const [dispName,setDispName]=useState("")
    useEffect(()=>{
        const getExerciseData=async()=>{
           const displayParts=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,exerciseOptions)
            setBodyPart([...displayParts])
        }
        getExerciseData()
    },[])
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const search= async(names)=>{
        if(names){
        setDispName(names)
        const exerciseData= await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,exerciseOptions)
        const searchExercises=exerciseData.filter(exercise=>
            exercise.name.toLowerCase().includes(names)||
            exercise.target.toLowerCase().includes(names)||
            exercise.bodyPart.toLowerCase().includes(names)
        )
        setExercises(searchExercises)
        console.log(exercises);
    }
    }
    const getDisplayData=(data)=>{
        if(data){
          search(data)
        }
    }
    const handleSearch=()=>{
        if(name){
            search(name)
            setName("")
        }
    }
    return(
        <div className="p-7">
            <h1 className="text-black text-3xl text-center">Exercises</h1>
            <div className="flex justify-center p-4 gap-5">
                <input type="text" className=" block border border-[#000] w-8/12 bg-gray-50 px-4 text-gray-900 text-sm rounded" value={name} onChange={handleName}/>
                <button className="text-l hover:text-black border border-[#4da82f] px-4 py-2 rounded hover:bg-[#4da82f] hover:duration-100 ease-in-out"
                onClick={handleSearch}>Submit</button>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">
                {bodyPart.map((body,index)=><SearchCard key={index} data={body} getDisplayData={getDisplayData}/>)}
            </div>
            {exercises.length==0?<div className="flex justify-center pt-10 text-black font-bold text-xl">No Result</div>:<Exercise data={exercises} name={dispName} />}
        </div>
    )
}
export default SearchExercise