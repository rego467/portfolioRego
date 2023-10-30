import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Navbars } from './components/Navbars'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Navbars />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
