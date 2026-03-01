export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Качественный <span>бетон</span> для вашего строительства
            </h1>
            <p>
              RockBeton — надежный поставщик бетона и строительных материалов.
              Более 10 лет опыта, собственный автопарк и гарантия качества.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn">Заказать бетон</a>
              <a href="#products" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>
                Наша продукция
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-text">Лет опыта</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-text">Проектов</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-text">Единиц техники</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
