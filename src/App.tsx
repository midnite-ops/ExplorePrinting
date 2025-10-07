import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from './pages/page404';
import "./index.css";
function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Page404 />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </Router>
  )
}

export default App
