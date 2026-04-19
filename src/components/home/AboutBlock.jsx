import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function AboutBlock() {
  return (
    <div className="about-block">
      <Title level={2} className="about-title">
        Sobre nosotros
      </Title>

      <Paragraph className="about-text">
        Skorpio Importwagen está especializada en la importación de vehículos
        desde los países de la UE a España, principalmente desde Alemania.
      </Paragraph>

      <Row gutter={[20, 20]} className="about-row">
        {[
          "Sin aranceles aduaneros",
          "Transparencia jurídica",
          "Inspección previa a la compra",
          "Servicio integral",
        ].map((item) => (
          <Col xs={24} sm={12} md={6} key={item}>
            <div className="about-item">{item}</div>
          </Col>
        ))}
      </Row>

      {/* ================= STYLES ================= */}
      <style>
        {`
/* ================= BLOCK ================= */

.about-block {
  padding: 80px 40px;
  background: #fff;
}

/* ➕ ADD: mobile padding fix */
@media (max-width: 768px) {
  .about-block {
    padding: 40px 16px; /* ✅ FIX */
  }
}

/* ================= TITLE ================= */

.about-title {
  font-size: 36px !important;
}

/* ➕ ADD: mobile title fix */
@media (max-width: 768px) {
  .about-title {
    font-size: 24px !important; /* ✅ FIX */
    text-align: center;
  }
}

/* ================= TEXT ================= */

.about-text {
  max-width: 700px;
  font-size: 18px;
  color: #555;
}

/* ➕ ADD */
@media (max-width: 768px) {
  .about-text {
    font-size: 15px; /* ✅ FIX */
    text-align: center;
    margin: 0 auto;
  }
}

/* ================= ITEMS ================= */

.about-item {
  font-size: 18px;
  font-weight: 600;
}

/* ➕ ADD: mobile items */
@media (max-width: 768px) {
  .about-item {
    font-size: 16px; /* ✅ FIX */
    text-align: center;
  }
}
        `}
      </style>
    </div>
  );
}
