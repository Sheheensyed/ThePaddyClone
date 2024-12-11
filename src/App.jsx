import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landinpage from './pages/Landinpage'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landinpage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
