import React from 'react';
import { Link } from 'gatsby';
import styles from './layout.module.css'
import { AnimatePresence } from 'framer-motion';

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
]

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Layout Here</h1>
      <nav className={styles.nav}>
        {links.map(({ to, label }) => (
          <Link to={to} key={to}>{label}</Link>
        ))}
      </nav>
      <div style={{ border: '1px solid black' }}>
        <AnimatePresence exitBeforeEnter>
          {children}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Layout;
