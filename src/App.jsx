import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import MyBookings from './pages/MyBookings'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </div>
  )
}

export default App
