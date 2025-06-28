// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Calculator from './pages/Calculator';
import './styles/main.css';
import Profile from './pages/Profile'; 

<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/calculator" element={<Calculator />} />
  <Route path="/profile" element={<Profile />} />  
</Routes>


function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
