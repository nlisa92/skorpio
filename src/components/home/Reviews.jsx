import { Card, Row, Col, Typography, Avatar, Carousel } from "antd";
import { StarFilled, UserOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function Reviews() {
  const reviews = [
    {
      name: "Anna M.",
      text: "¡Servicio excelente! Trajeron el coche rápido y sin complicaciones.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Igor K.",
      text: "Enfoque profesional, muy satisfecho con la compra.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Maria L.",
      text: "Proceso transparente y comunicación perfecta. ¡Muy recomendable!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div className="reviews-section">
      <Title className="reviews-title">Opiniones de clientes</Title>

      <Carousel autoplay dots className="reviews-carousel">
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

      {/* ================= STYLES ================= */}
      <style>
        {`
/* ================= SECTION ================= */

.reviews-section {
  padding: 80px 40px;
  background: #f8f8f8;
}

/* ➕ ADD mobile fix */
@media (max-width: 768px) {
  .reviews-section {
    padding: 40px 16px; /* ✅ FIX */
  }
}

/* ================= TITLE ================= */

.reviews-title {
  font-size: 36px !important;
  text-align: center;
}

/* ➕ ADD */
@media (max-width: 768px) {
  .reviews-title {
    font-size: 24px !important; /* ✅ FIX */
  }
}

/* ================= SLIDE ================= */

.reviews-slide {
  display: flex;
  justify-content: center;
}

/* ================= CARD ================= */

.review-card {
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  background: white;
  text-align: center;
  max-width: 600px;
  width: 100%;
}

/* ================= AVATAR ================= */

.review-avatar {
  margin-bottom: 20px;
}

/* ================= NAME ================= */

.review-name {
  margin-bottom: 10px !important;
}

/* ================= RATING ================= */

.review-rating {
  margin-bottom: 15px;
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
}

/* ➕ ADD mobile fix */
@media (max-width: 768px) {
  .review-text {
    font-size: 14px;
  }

  .review-card {
    padding: 20px; /* ✅ FIX */
  }
}
        `}
      </style>
    </div>
  );
}
