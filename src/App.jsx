import Home from './Components/Home/Home'
import './App.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import { Box } from '@mui/material'
import Exercise from './Components/Exercise/Exercise'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
function App() {
 
  return (<Box>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/exercise' element={<Exercise/>}/>
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
    
  </Box>)
}

export default App
