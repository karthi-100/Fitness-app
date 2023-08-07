const SearchExercise=()=>{

    return(
        <div className="p-7">
            <h1 className="text-black text-3xl text-center">Exercises</h1>
            <div className="flex justify-center p-4 gap-2">
                <input type="text" className="  block border border-[#000] w-8/12 bg-gray-50 px-4 text-gray-900 text-sm rounded "/>
                <button className="text-l hover:text-black border border-[#4da82f] px-4 py-2 rounded hover:bg-[#4da82f] hover:duration-100 ease-in-out">Submit</button>
            </div>
        </div>
    )
}
export default SearchExercise