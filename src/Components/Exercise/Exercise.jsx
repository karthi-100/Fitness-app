import ExerciseCard from "./ExerciseCard/ExerciseCard"
const Exercise=({data})=>{
return(
    <div>
        {data.map((d,index)=><ExerciseCard key={index} exercises={d}/>)}
    </div>
)

}
export default Exercise