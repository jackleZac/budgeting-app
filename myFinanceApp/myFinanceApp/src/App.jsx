import './index.css'
import './App.css';
import  Header  from './components/Header'
import  Footer  from './components/Footer'
import  Dashboard  from './pages/Dashboard'
import  Transaction  from './pages/Transaction'
import  Investment from './pages/Investment'
import News from './pages/News'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Dashboard />}/>
        <Route path='/transaction' element={<Transaction />}/>
        <Route path='/investment' element={<Investment />}/>
        <Route path='/news' element={<News />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
