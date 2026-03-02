import Image from 'next/image';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">О компании</h2>
        <div className="about-content">
          <div className="about-image">
            <Image
              src="/about-bg.jpeg"
              alt="Производство бетона"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="about-text">
            <h3>RockBeton — ваш надёжный партнер в строительстве</h3>
            <p>
              Компания RockBeton — это проверенный поставщик качественного бетона
              для строительных проектов любой сложности. Мы зарекомендовали себя
              как ответственный партнёр, которому доверяют застройщики и частные клиенты.
            </p>
            <p>
              Располагаем собственным производством и современным автопарком
              бетоносмесителей, что позволяет оперативно выполнять заказы
              и гарантировать стабильное качество продукции.
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
                <span>Оперативная доставка</span>
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
