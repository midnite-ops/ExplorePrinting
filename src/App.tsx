import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from './pages/page404';
import Home from "./pages/home"
import "./index.css";
function App() {

  return (
    <Router>
      <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Home/>} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
    </Router>
  )
}

export default App
