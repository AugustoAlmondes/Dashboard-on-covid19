import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion as MOTION } from 'motion/react';
import styles from './Header.module.css';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detecta tamanho da tela
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const menuItems = [
    { name: 'Home', delay: 2.5 },
    { name: 'Sobre', delay: 2.6 },
    { name: 'API', delay: 2.7 },
    { name: 'Developer', delay: 2.8 },
    { name: 'Dashboard', delay: 3 }
  ];

  return (
    <header className={styles.header}>
      <MOTION.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 2.4 }}
        className={styles.logo}
      >
        Dash
      </MOTION.h2>

      {/* Menu Desktop */}
      {!isMobile && (
        <ul className={styles.desktop_menu}>
          {menuItems.map((item) => (
            <MOTION.li
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: item.delay }}
            >
              {item.name}
            </MOTION.li>
          ))}
        </ul>
      )}

      {/* Menu Mobile */}
      {isMobile && (
        <>
          <button 
            className={styles.menu_button}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {menuOpen && (
            <MOTION.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.mobile_menu}
            >
              <ul>
                {menuItems.map((item) => (
                  <MOTION.li
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </MOTION.li>
                ))}
              </ul>
            </MOTION.div>
          )}
        </>
      )}
    </header>
  );
}