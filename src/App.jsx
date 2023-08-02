import Home from './Components/Home/Home'
import './index.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Exercise from './Components/Exercise/Exercise'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
function App() {
 
  return (<div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/exercise' element={<Exercise/>}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
