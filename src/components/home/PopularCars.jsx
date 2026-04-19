import { Card, Row, Col, Typography, Button } from "antd";

const { Title } = Typography;

export default function PopularCars() {
  const cars = [
    { name: "BMW X5", year: 2020, price: "39 500 €" },
    { name: "Audi A6", year: 2019, price: "32 800 €" },
    { name: "Porsche 911", year: 2018, price: "75 000 €" },
    { name: "Mercedes S-Class", year: 2021, price: "55 000 €" },
  ];

  return (
    <div className="cars-section">
      <Title className="cars-title">Coches populares</Title>

      <Row gutter={[20, 20]} className="cars-row">
        {cars.map((car) => (
          <Col xs={24} sm={12} lg={6} key={car.name}>
            <Card className="car-card" cover={<div className="car-image" />}>
              <Title level={4} className="car-name">
                {car.name}
              </Title>

              <p className="car-year">{car.year}</p>

              <p className="car-price">{car.price}</p>

              <Button className="car-btn">Más detalles</Button>
            </Card>
          </Col>
        ))}
      </Row>

      {/* ================= STYLES ================= */}
      <style>
        {`
/* ================= SECTION ================= */

.cars-section {
  padding: 80px 40px;
  background: #fff;
}

/* ➕ ADD mobile fix */
@media (max-width: 768px) {
  .cars-section {
    padding: 40px 16px; /* ✅ FIX */
  }
}

/* ================= TITLE ================= */

.cars-title {
  font-size: 36px !important;
}

/* ➕ ADD */
@media (max-width: 768px) {
  .cars-title {
    font-size: 24px !important;
    text-align: center;
  }
}

/* ================= CARD ================= */

.car-card {
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  height: 100%;
}

/* ================= IMAGE ================= */

.car-image {
  height: 180px;
  background: #eee;
}

/* ================= TEXT ================= */

.car-name {
  margin-bottom: 6px !important;
}

.car-year {
  margin: 0;
  color: #666;
}

.car-price {
  font-weight: 600;
}

/* ================= BUTTON ================= */

.car-btn {
  background: #ff1a1a !important;
  border: none !important;
  color: #fff !important;
  margin-top: 10px;
}

/* ➕ ADD mobile button fix */
@media (max-width: 768px) {
  .car-btn {
    width: 100%; /* ✅ FIX */
  }
}
        `}
      </style>
    </div>
  );
}
