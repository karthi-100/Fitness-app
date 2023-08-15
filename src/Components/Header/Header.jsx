import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Fitgym from '../Assets/Fitgym.jpg'
function Header() {
  return (
    <div style={{backgroundImage:`url(${Fitgym})`}} className=' bg-cover min-h-screen opacity- bg-center backdrop-blur-sm drop-shadow-'>
        <Navbar />
        <Banner />
    </div>
  )
}

export default Header