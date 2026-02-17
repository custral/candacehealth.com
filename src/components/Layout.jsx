import { Link, Outlet } from 'react-router-dom';
import { Heart, Home, Info, ShieldCheck, Mail, Box } from 'lucide-react';

const Layout = () => {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <Heart className="logo-icon" color="#e91e63" />
          <span className="logo-text">Candace Health</span>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link"><Home size={18} /> Home</Link>
          <Link to="/about" className="nav-link"><Info size={18} /> About</Link>
          <Link to="/products" className="nav-link"><Box size={18} /> Products</Link>
          <Link to="/services" className="nav-link"><ShieldCheck size={18} /> Services</Link>
          <Link to="/contact" className="nav-link"><Mail size={18} /> Contact</Link>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Candace Health. All rights reserved.</p>
          <p className="disclaimer">This is fake data for a domain purchased by Custral.com.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
