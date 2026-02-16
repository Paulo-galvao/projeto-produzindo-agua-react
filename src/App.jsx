import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Work from './pages/Work/Work'
import Gallery from './pages/Gallery/Gallery'
import Team from './pages/Team/Team'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/work' element={<Work/>}></Route>
          {/* <Route path='/works' element={<Works/>}></Route> */}
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/team' element={<Team/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>      
    </>
  )
}

export default App
