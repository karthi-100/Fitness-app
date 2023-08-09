import ExerciseCard from "./ExerciseCard/ExerciseCard"
const Exercise=({data,name})=>{
    console.log(data);
return(
    <div className=" py-10 w-full flex flex-wrap gap-20 justify-around">
        {data.map((d,index)=><ExerciseCard key={index} exercises={d} name={name} />)}
    </div>
)

}
export default Exercise