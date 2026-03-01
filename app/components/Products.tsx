'use client';

import { useState } from 'react';

const products = [
  {
    id: 1,
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
        <path d="M7 12h2v5H7zm4-3h2v8h-2zm4-3h2v11h-2z"/>
      </svg>
    ),
    title: 'Бетон',
    shortDescription: 'Товарный бетон классов от В7,5 до В40. Для фундаментов, стен, перекрытий.',
    fullDescription: `Товарный бетон от компании RockBeton — это высококачественная строительная смесь, произведенная на современном оборудовании с соблюдением всех технологических норм.

Мы предлагаем бетон различных классов прочности: от В7,5 для подготовительных работ до В40 для высоконагруженных конструкций.

Области применения:
• Фундаменты всех типов (ленточные, плитные, свайные)
• Монолитные стены и перекрытия
• Стяжки полов
• Отмостки и дорожки
• Бетонные площадки`,
    specs: [
      { label: 'Классы прочности', value: 'В7,5 — В40' },
      { label: 'Морозостойкость', value: 'F50 — F300' },
      { label: 'Водонепроницаемость', value: 'W2 — W12' },
      { label: 'Подвижность', value: 'П1 — П5' },
    ],
  },
  {
    id: 2,
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    title: 'Щебень',
    shortDescription: 'Гранитный и известняковый щебень различных фракций от 5 до 70 мм.',
    fullDescription: `Щебень от RockBeton — это высококачественный нерудный материал, получаемый путем дробления горных пород.

Мы предлагаем гранитный и известняковый щебень различных фракций для любых строительных задач.

Области применения:
• Производство бетона и асфальта
• Устройство дренажных систем
• Отсыпка дорог и площадок
• Ландшафтный дизайн
• Фундаментные работы`,
    specs: [
      { label: 'Фракции', value: '5-10, 10-20, 20-40, 40-70 мм' },
      { label: 'Прочность', value: 'М800 — М1400' },
      { label: 'Морозостойкость', value: 'F150 — F300' },
      { label: 'Лещадность', value: 'до 15%' },
    ],
  },
  {
    id: 3,
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        <circle cx="8" cy="14" r="2"/>
        <circle cx="12" cy="8" r="2"/>
        <circle cx="16" cy="14" r="2"/>
      </svg>
    ),
    title: 'Песок',
    shortDescription: 'Карьерный и речной песок для строительных и отделочных работ.',
    fullDescription: `Строительный песок от RockBeton — это природный материал высокого качества, прошедший тщательную проверку в нашей лаборатории.

Мы предлагаем карьерный и мытый речной песок различной зернистости для всех видов строительных работ.

Области применения:
• Приготовление бетонных и растворных смесей
• Штукатурные и кладочные работы
• Устройство песчаных подушек
• Благоустройство территорий
• Пескоструйные работы`,
    specs: [
      { label: 'Модуль крупности', value: '1.5 — 3.0' },
      { label: 'Содержание глины', value: 'до 3%' },
      { label: 'Влажность', value: '3 — 7%' },
      { label: 'Насыпная плотность', value: '1400-1600 кг/м³' },
    ],
  },
  {
    id: 4,
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    ),
    title: 'Раствор',
    shortDescription: 'Кладочные и штукатурные растворы различных марок.',
    fullDescription: `Строительные растворы от RockBeton — это готовые к применению смеси, изготовленные по ГОСТ с точным соблюдением пропорций компонентов.

Мы производим кладочные и штукатурные растворы различных марок для профессионального строительства.

Области применения:
• Кирпичная и блочная кладка
• Штукатурные работы
• Устройство стяжек пола
• Заделка швов и трещин
• Выравнивание поверхностей`,
    specs: [
      { label: 'Марки', value: 'М50 — М200' },
      { label: 'Подвижность', value: 'Пк1 — Пк4' },
      { label: 'Морозостойкость', value: 'F35 — F100' },
      { label: 'Жизнеспособность', value: '2-4 часа' },
    ],
  },
];

interface Product {
  id: number;
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  fullDescription: string;
  specs: { label: string; value: string }[];
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="products section" id="products">
      <div className="container">
        <h2 className="section-title">Наша продукция</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => openModal(product)}
              style={{ cursor: 'pointer' }}
            >
              <div className="product-image">
                {product.icon}
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.shortDescription}</p>
                <span className="product-link">
                  Подробнее →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>

            <div className="modal-body">
              <div className="modal-image">
                <div className="modal-icon">
                  {selectedProduct.icon}
                </div>
              </div>

              <div className="modal-info">
                <h2>{selectedProduct.title}</h2>
                <div className="modal-description">
                  {selectedProduct.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="modal-specs">
                  <h4>Характеристики:</h4>
                  <div className="specs-grid">
                    {selectedProduct.specs.map((spec, index) => (
                      <div key={index} className="spec-item">
                        <span className="spec-label">{spec.label}</span>
                        <span className="spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="#contact" className="btn" onClick={closeModal}>
                  Заказать
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
