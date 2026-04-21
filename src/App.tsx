import AgendeSuaVisita from './pages/AgendeSuaVisita'
import Catalogo from './pages/Catalogo'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agende-sua-visita" element={<AgendeSuaVisita />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </Router>
  )
}

export default App
