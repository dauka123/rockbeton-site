'use client';

import { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    image: '/m150.webp',
    title: 'Бетон М150 (В12,5)',
    shortDescription: 'Универсальный бетон для подготовительных работ и лёгких конструкций.',
    fullDescription: `Бетон марки М150 (класс В12,5) — это универсальный строительный материал с оптимальным соотношением цены и качества.

Идеально подходит для работ, где не требуется высокая несущая способность, но важна надёжность и долговечность.

Области применения:
• Подготовка основания под фундамент (подбетонка)
• Стяжка пола в жилых помещениях
• Заливка отмостки и садовых дорожек
• Бетонирование площадок и террас
• Установка бордюров и столбов ограждений`,
    specs: [
      { label: 'Класс прочности', value: 'В12,5' },
      { label: 'Прочность на сжатие', value: '150 кгс/см²' },
      { label: 'Морозостойкость', value: 'F100' },
      { label: 'Водонепроницаемость', value: 'W4' },
    ],
  },
  {
    id: 2,
    image: '/m200.webp',
    title: 'Бетон М200 (В15)',
    shortDescription: 'Популярный бетон для фундаментов, стяжек и дорожек.',
    fullDescription: `Бетон марки М200 (класс В15) — один из самых востребованных в частном строительстве. Обеспечивает отличный баланс прочности и экономичности.

Это оптимальный выбор для большинства строительных задач в индивидуальном домостроении.

Области применения:
• Ленточные и плитные фундаменты для лёгких построек
• Монолитные стяжки полов
• Отмостки и площадки под автомобиль
• Лестницы и крыльца
• Подпорные стенки небольшой высоты`,
    specs: [
      { label: 'Класс прочности', value: 'В15' },
      { label: 'Прочность на сжатие', value: '200 кгс/см²' },
      { label: 'Морозостойкость', value: 'F150' },
      { label: 'Водонепроницаемость', value: 'W6' },
    ],
  },
  {
    id: 3,
    image: '/m250.webp',
    title: 'Бетон М250 (В20)',
    shortDescription: 'Надёжный бетон для фундаментов и несущих конструкций.',
    fullDescription: `Бетон марки М250 (класс В20) — надёжный материал повышенной прочности для ответственных строительных конструкций.

Выдерживает значительные нагрузки и обладает хорошей устойчивостью к внешним воздействиям.

Области применения:
• Фундаменты частных домов и коттеджей
• Монолитные перекрытия
• Лестничные марши и площадки
• Подпорные стены
• Площадки с повышенной нагрузкой`,
    specs: [
      { label: 'Класс прочности', value: 'В20' },
      { label: 'Прочность на сжатие', value: '250 кгс/см²' },
      { label: 'Морозостойкость', value: 'F150' },
      { label: 'Водонепроницаемость', value: 'W6' },
    ],
  },
  {
    id: 4,
    image: '/m300.webp',
    title: 'Бетон М300 (В22,5)',
    shortDescription: 'Прочный бетон для многоэтажного строительства и ответственных работ.',
    fullDescription: `Бетон марки М300 (класс В22,5) — высокопрочный материал для серьёзных строительных проектов.

Обеспечивает надёжность конструкций при значительных механических нагрузках и неблагоприятных условиях эксплуатации.

Области применения:
• Фундаменты многоэтажных зданий
• Монолитные стены и перекрытия
• Колонны и балки
• Чаши бассейнов
• Промышленные полы`,
    specs: [
      { label: 'Класс прочности', value: 'В22,5' },
      { label: 'Прочность на сжатие', value: '300 кгс/см²' },
      { label: 'Морозостойкость', value: 'F200' },
      { label: 'Водонепроницаемость', value: 'W8' },
    ],
  },
  {
    id: 5,
    image: '/m350.webp',
    title: 'Бетон М350 (В25)',
    shortDescription: 'Высокопрочный бетон для промышленного и гражданского строительства.',
    fullDescription: `Бетон марки М350 (класс В25) — профессиональный материал для объектов с повышенными требованиями к прочности.

Широко применяется в промышленном и многоэтажном гражданском строительстве.

Области применения:
• Высоконагруженные фундаменты
• Монолитные каркасы зданий
• Плиты перекрытий большого пролёта
• Колонны и ригели
• Аэродромные и промышленные покрытия`,
    specs: [
      { label: 'Класс прочности', value: 'В25' },
      { label: 'Прочность на сжатие', value: '350 кгс/см²' },
      { label: 'Морозостойкость', value: 'F200' },
      { label: 'Водонепроницаемость', value: 'W10' },
    ],
  },
  {
    id: 6,
    image: '/m400.webp',
    title: 'Бетон М400 (В30)',
    shortDescription: 'Максимально прочный бетон для особо ответственных конструкций.',
    fullDescription: `Бетон марки М400 (класс В30) — материал максимальной прочности для особо ответственных конструкций.

Применяется там, где требуется исключительная надёжность и долговечность.

Области применения:
• Мостовые конструкции
• Гидротехнические сооружения
• Банковские хранилища
• Конструкции метрополитена
• Особо нагруженные промышленные объекты`,
    specs: [
      { label: 'Класс прочности', value: 'В30' },
      { label: 'Прочность на сжатие', value: '400 кгс/см²' },
      { label: 'Морозостойкость', value: 'F300' },
      { label: 'Водонепроницаемость', value: 'W12' },
    ],
  },
];

interface Product {
  id: number;
  image: string;
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
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
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
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
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
