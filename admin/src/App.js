import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreatedProjectOn from './components/project/CreatedProjectOn';

function App() {
  return (
    <div >
      
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          {/* <Route path='/created-project-on' element={<CreatedProjectOn />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
