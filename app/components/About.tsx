export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">О компании</h2>
        <div className="about-content">
          <div className="about-image">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="#1a1a2e">
              <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
            </svg>
          </div>
          <div className="about-text">
            <h3>RockBeton — ваш надежный партнер в строительстве</h3>
            <p>
              Компания RockBeton работает на рынке строительных материалов более 10 лет.
              За это время мы зарекомендовали себя как надежный поставщик качественного
              бетона и строительных смесей.
            </p>
            <p>
              Мы располагаем собственным производством, современным автопарком
              бетоносмесителей и бетононасосов, что позволяет нам оперативно
              выполнять заказы любого объема.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">✓</div>
                <span>Собственное производство бетона</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">✓</div>
                <span>Лаборатория контроля качества</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">✓</div>
                <span>Доставка по городу и области</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">✓</div>
                <span>Гибкая система скидок</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
