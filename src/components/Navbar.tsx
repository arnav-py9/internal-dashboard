// src/components/Navbar.tsx
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  const goToProfile = () => {
    console.log('Navigating to profile...');
    navigate('/profile');
  };

  return (
    <div className="navbar">
      <div className="spacer" />
      <div className="brand">SocialFin</div>
      <div className="nav-right">
        <FaUser
          className="avatar"
          style={{ cursor: 'pointer' }}
          onClick={goToProfile}
        />
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
