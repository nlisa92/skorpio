import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function TrustBlock() {
  const brands = [
    { name: "Volkswagen" },
    { name: "BMW" },
    { name: "TÜV" },
    { name: "Allianz" },
  ];

  return (
    <div className="trust-section">
      <Title className="trust-title">Confían en nosotros</Title>

      <Paragraph className="trust-text">
        Colaboramos con marcas y organizaciones reconocidas en toda Europa.
      </Paragraph>

      <Row gutter={[20, 20]} justify="center" className="trust-row">
        {brands.map((brand) => (
          <Col xs={12} sm={8} md={6} key={brand.name}>
            <div className="brand-card">
              <div className="car-line" />

              <div className="brand-name">{brand.name}</div>
            </div>
          </Col>
        ))}
      </Row>

      {/* ================= STYLES ================= */}
      <style>
        {`
/* ================= SECTION ================= */

.trust-section {
  padding: 80px 40px;
  background: #fff;
}

/* ➕ ADD mobile fix */
@media (max-width: 768px) {
  .trust-section {
    padding: 40px 16px; /* ✅ FIX */
  }
}

/* ================= TITLE ================= */

.trust-title {
  font-size: 36px !important;
  text-align: center;
  font-weight: 600;
}

/* ================= TEXT ================= */

.trust-text {
  text-align: center;
  color: #666;
  margin-top: 10px;
  font-size: 16px;
}

/* ➕ ADD mobile */
@media (max-width: 768px) {
  .trust-title {
    font-size: 24px !important;
  }

  .trust-text {
    font-size: 14px;
  }
}

/* ================= CARD ================= */

.brand-card {
  height: 150px;
  border: 1px solid #ddd;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: #fff;
  cursor: pointer;
}

/* ➕ ADD mobile fix */
@media (max-width: 768px) {
  .brand-card {
    height: 110px; /* ✅ FIX */
  }
}

/* ================= HOVER ================= */

.brand-card:hover {
  border-color: #000;
  transform: translateY(-4px);
}

/* ================= LINE ================= */

.car-line {
  width: 80px;
  height: 40px;
  position: relative;
}

.car-line::before,
.car-line::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: #000;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.car-line::before {
  top: 10px;
  width: 80%;
  margin: 0 auto;
  transform: skewX(-20deg);
}

.car-line::after {
  bottom: 10px;
  width: 100%;
}

.brand-card:hover .car-line::before,
.brand-card:hover .car-line::after {
  background: #ff1a1a;
}

/* ================= NAME ================= */

.brand-name {
  margin-top: 15px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

/* ➕ ADD mobile */
@media (max-width: 768px) {
  .brand-name {
    font-size: 14px;
  }
}
        `}
      </style>
    </div>
  );
}
