
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Biodata from './page/Biodata'
import Skill from './componens/Skill'
import DetailSkiil from './componens/DetailSkiil'


function App() {


  return (
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/biodata' element={<Biodata/>}  />
      <Route path='/skiil' element={<Skill/>} />\
      <Route path='/skiil/:item' element={<DetailSkiil/>} />
    </Routes>
  )
}

export default App
