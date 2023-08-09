import React from 'react'

function SearchCard({data,getDisplayData}) {
    const handleClick=()=>{
        getDisplayData(data)
    }
    
  return (
<div className='border border-[#4da82f] px-3 py-1 rounded-lg hover:scale-[110%] ease-in-out duration-150 cursor-pointer'>  
    <div className='text-black w-fit font-medium' onClick={handleClick}>{data}</div>
    </div>
  )
}

export default SearchCard