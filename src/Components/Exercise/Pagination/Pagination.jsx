import React from 'react'
import ReactPaginate from 'react-paginate'

function Pagination() {
    
    const handlePageChange=(e)=>{
        console.log(e.selected);
    }
  return (
    <div>
        <ReactPaginate 
        nextLabel={<span className='text-2xl px-2 hover:scale-150 ease-in-out duration-200 '>{">"}</span>}
        pageRangeDisplayed={3}
        pageCount={50}
        previousLabel={<span className='text-2xl hover:scale-150  ease-in-out duration-200 px-2'>{"<"}</span>}
        containerClassName='flex gap-2 items-center'
        pageClassName='text-black px-2'
        activeClassName='bg-black text-[#4da82f] rounded p-2'
        onPageChange={handlePageChange}
        />

    </div>
  )
}

export default Pagination