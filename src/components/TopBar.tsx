
import './TopBar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const TopBar: React.FC = () => (
  <nav className="top-bar">
    <div className="top-bar__title">Project Hub</div>
    <div className="top-bar__links">
      <Link to="/pdf-rag" className="top-bar__link">PDF RAG Project</Link>
      <Link to="/dummy" className="top-bar__link">Dummy Project</Link>
    </div>
  </nav>
);

export default TopBar;
