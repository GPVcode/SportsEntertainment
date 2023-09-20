import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './pages/components/navbar/navBar.jsx';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
