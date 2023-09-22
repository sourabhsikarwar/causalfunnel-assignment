import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";
import { Home, Start, TestPage, Result } from "./Pages";
import { Navbar } from "./components";

function App() {
  return (
    <MathJaxContext>
      <Router>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/start" element={<Start />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
      </Router>
    </MathJaxContext>
  );
}

export default App;
