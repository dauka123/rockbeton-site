export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <a href="#" className="logo">
              Rock<span>Beton</span>
            </a>
            <p>
              Надежный поставщик бетона и строительных материалов.
              Качество, проверенное временем.
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-title">Навигация</h4>
            <ul className="footer-links">
              <li><a href="#home">Главная</a></li>
              <li><a href="#about">О нас</a></li>
              <li><a href="#products">Продукция</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </div>

          <div className="footer-products">
            <h4 className="footer-title">Продукция</h4>
            <ul className="footer-links">
              <li><a href="#products">Бетон</a></li>
              <li><a href="#products">Щебень</a></li>
              <li><a href="#products">Песок</a></li>
              <li><a href="#products">Раствор</a></li>
            </ul>
          </div>

          <div className="footer-contacts">
            <h4 className="footer-title">Контакты</h4>
            <ul className="footer-links">
              <li><a href="tel:+77077871155">+7 707 787 11 55</a></li>
              <li><a href="mailto:info@rockbeton.kz">info@rockbeton.kz</a></li>
              <li>г. Алматы</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} RockBeton. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
