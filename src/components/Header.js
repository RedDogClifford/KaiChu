import React from 'react';
import { Link } from 'react-router-dom';
import headerStyles from '../styles/headerStyle.module.css'

export default function Header() {
  return (
    <div className={headerStyles.banner}>
      <div className={headerStyles.leftGridItem}>
        <Link to="/" className={headerStyles.name}>KAI CHU</Link>
      </div>
      <div className={headerStyles.rightGridItem}>
        <ul>
          <li><Link to="/">Bio</Link></li>
          <li><Link to="/portfolio">Game Portfolio</Link></li>
        </ul>
      </div>
    </div>
  );
}
