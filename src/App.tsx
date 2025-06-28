// src/App.tsx
import Signup from './pages/Signup';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Calculator from './pages/Calculator';
import Profile from './pages/Profile';
import Login from './pages/Login'; // Assuming you have a separate page for Login
import './styles/main.css';

function App() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('userEmail') && localStorage.getItem('userPassword');

  // Optional: Hide Navbar & Sidebar on login page
  const hideLayout = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="container">
      {!hideLayout && <Navbar />}
      <div className="main">
        {!hideLayout && <Sidebar />}
        <div className="content">
          <Routes>
            
  <Route
    path="/"
    element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
  />
  <Route
    path="/calculator"
    element={isLoggedIn ? <Calculator /> : <Navigate to="/login" />}
  />
  <Route
    path="/profile"
    element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
  />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
</Routes>

          
        </div>
      </div>
    </div>
  );
}

export default App;
