import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Rental from './pages/Rental/Rental'
import Auction from './pages/Auction/Auction'

function App() {
  return(
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rental" element={<Rental/>}/>
        <Route path='/auction' element={<Auction/>}/>
      </Routes>
    </>
  )
}

export default App
