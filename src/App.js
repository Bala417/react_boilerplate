import "./App.css";
import Counter from "./components/counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Counter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
