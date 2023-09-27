import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './pages/components/navbar/navBar.jsx';
import Home from './pages/Home';
import ThreadList from './pages/components/threads/threadList';
import ThreadDetail from './pages/components/threads/threadDetail';
import PPVList from './pages/components/threads/PPVList';
import WWEThread from './threads/WWEThread';
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/threads" element={<ThreadList />} />
          <Route path="/threads/:id" element={<ThreadDetail />} />
          <Route path="/wwe" element={<WWEThread PPVList={PPVList}/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
