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

/* ================= HARD FIX SLICK ================= */

.reviews-carousel .slick-list {
  overflow: hidden !important;
}

.reviews-carousel .slick-track {
  display: block !important; /* 🔥 убираем flex */
}

.reviews-carousel .slick-slide {
  width: 100% !important;
  float: left;
}

.reviews-carousel .slick-slide > div {
  width: 100%;
}

/* ================= SLIDE ================= */

.reviews-slide {
  width: 100%;
}

/* ================= CARD ================= */

.review-card {
  margin: 0 auto; /* 🔥 центрирование */
  padding: 34px;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
  background: white;
  text-align: center;
  max-width: 620px;
  width: 100%;
  transition: 0.3s;
}

.review-card:hover {
  transform: translateY(-4px);
}

/* ================= AVATAR ================= */

.review-avatar {
  margin-bottom: 16px;
}

/* ================= NAME ================= */

.review-name {
  margin-bottom: 4px !important;
}

/* ================= META ================= */

.review-meta {
  font-size: 14px;
  color: #888;
  margin-bottom: 12px;
}

/* ================= RATING ================= */

.review-rating {
  margin-bottom: 14px;
}

.star {
  color: #ff1a1a;
  font-size: 20px;
  margin-right: 4px;
}

/* ================= TEXT ================= */

.review-text {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .review-text {
    font-size: 14px;
  }

  .review-card {
    padding: 22px;
  }
}
      `}</style>
    </div>
  );
}
