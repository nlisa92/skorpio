import { Card, Typography, Avatar, Carousel } from "antd";
import { StarFilled, UserOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function Reviews() {
  const reviews = [
    {
      name: "Anna M.",
      city: "Málaga",
      type: "Compradora",
      text: "Servicio impecable. El coche llegó rápido y exactamente como se describía.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Igor K.",
      city: "Madrid",
      type: "Inversor",
      text: "Proceso profesional y transparente. Muy satisfecho con el resultado.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Maria L.",
      city: "Valencia",
      type: "Cliente",
      text: "Comunicación perfecta en todo momento. Repetiría sin dudar.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div className="reviews-section">
      <Title className="reviews-title">Opiniones de clientes</Title>

      <Carousel
        autoplay
        dots
        adaptiveHeight
        slidesToShow={1}
        slidesToScroll={1}
        centerMode={false}
        infinite
        className="reviews-carousel"
      >
        {reviews.map((r) => (
          <div key={r.name} className="reviews-slide">
            <Card className="review-card">
              <Avatar
                size={80}
                src={r.avatar}
                icon={<UserOutlined />}
                className="review-avatar"
              />

              <Title level={4} className="review-name">
                {r.name}
              </Title>

              <div className="review-meta">
                {r.city} · {r.type}
              </div>

              <div className="review-rating">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <StarFilled key={i} className="star" />
                ))}
              </div>

              <Paragraph className="review-text">{r.text}</Paragraph>
            </Card>
          </div>
        ))}
      </Carousel>

      <style>{`
/* ================= SECTION ================= */

.reviews-section {
  padding: 80px 40px;
  background: #f8f8f8;
}

@media (max-width: 768px) {
  .reviews-section {
    padding: 40px 16px;
  }
}

/* ================= TITLE ================= */

.reviews-title {
  font-size: 36px !important;
  text-align: center;
}

@media (max-width: 768px) {
  .reviews-title {
    font-size: 24px !important;
  }
}

/* ================= CAROUSEL FIX (КЛЮЧЕВОЕ) ================= */

.reviews-carousel {
  overflow: hidden;
}

/* slick reset — убираем боковые смещения */
.reviews-carousel .slick-list {
  overflow: hidden !important;
  padding: 0 !important;
}

.reviews-carousel .slick-track {
  display: flex !important;
  align-items: stretch;
}

.reviews-carousel .slick-slide {
  display: flex !important;
  justify-content: center;
}

/* центрирование контейнера */
.reviews-carousel .slick-slide > div {
  width: 100%;
  display: flex !important;
  justify-content: center;
}

/* ================= SLIDE ================= */

.reviews-slide {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* ================= CARD ================= */

.review-card {
  width: min(620px, 100%);
  margin: 0 auto;
  padding: 34px;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
  background: white;
  text-align: center;
  transition: 0.3s;
}

.review-card:hover {
  transform: translateY(-4px);
}

/* ================= MOBILE FIX ================= */

@media (max-width: 768px) {
  .review-card {
    padding: 20px;
  }

  .review-text {
    font-size: 14px;
  }
}
      `}</style>
    </div>
  );
}
