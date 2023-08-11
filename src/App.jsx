import Home from './Components/Home/Home'
import './index.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import SearchExercise from './Components/Home/SearchExercise/SearchExercise'
import Footer from './Components/Footer/Footer'

import Header from './Components/Header/Header'
import ExerciseDetail from './Components/Exercise/ExerciseCard/ExerciseDetail/ExerciseDetail'
function App() {
 
  return (<div>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/exercise' element={<SearchExercise/>}/>
      <Route path='/exerciseDetails' element={<ExerciseDetail />}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
