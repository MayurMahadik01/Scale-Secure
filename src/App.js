import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Agent from './components/Agent';
import Login from './components/Login';

function App() {
  return (    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/agent" element={<Agent />} />      
      </Routes>
    </Router>
  );
}

export default App;
