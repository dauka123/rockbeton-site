'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo">
            Rock<span>Beton</span>
          </a>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" className="nav-link">Главная</a></li>
              <li><a href="#about" className="nav-link">О нас</a></li>
              <li><a href="#products" className="nav-link">Продукция</a></li>
              <li><a href="#advantages" className="nav-link">Преимущества</a></li>
              <li><a href="#contact" className="nav-link">Контакты</a></li>
            </ul>
          </nav>

          <a href="tel:+77077871155" className="header-phone">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            +7 707 787 11 55
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
