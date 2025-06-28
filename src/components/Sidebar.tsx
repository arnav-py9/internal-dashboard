import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/" className="link">Dashboard</Link>
      <Link to="/calculator" className="link">Calculator</Link>
    </div>
  );
}

export default Sidebar;
