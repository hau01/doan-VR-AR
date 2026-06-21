import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tour from './pages/Tour'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
