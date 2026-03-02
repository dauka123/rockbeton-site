export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Качественный <span>бетон</span> для вашего строительства
            </h1>
            <p>
              RockBeton — надёжный поставщик бетона всех марок.
              Собственный автопарк, оперативная доставка и гарантия качества.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn">Заказать бетон</a>
              <a href="#products" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>
                Наша продукция
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
