import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
function Header() {
  return (
    <div className='bg-[url("src/Components/Assets/Fitgym.jpg")] bg-cover min-h-screen opacity- bg-center backdrop-blur-sm drop-shadow-'>
        <Navbar />
        <Banner />
    </div>
  )
}

export default Header