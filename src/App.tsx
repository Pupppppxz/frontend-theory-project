import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from "./components/landing"
import Home from "./views/Home"
import Members from "./views/Members"
import NoPage from './views/NoPage'
import SourceCode from './views/SourceCode'
import Regex from './views/Regex'

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="members" element={<Members />} />
        <Route path="source-code" element={<SourceCode />} />
        <Route path="regex" element={<Regex />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  )
}

export default App
