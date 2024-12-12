import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Works from './pages/Works/Works'
import Gallery from './pages/Gallery/Gallery'
// import Banner from './Components/Banner/Banner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/works' element={<Works/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
