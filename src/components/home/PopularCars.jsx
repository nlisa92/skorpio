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
    <div style={{ padding: "80px 40px", background: "#fff" }}>
      <Title level={2} style={{ fontSize: 36 }}>Coches populares</Title>

      <Row gutter={40} style={{ marginTop: 40 }}>
        {cars.map((car) => (
          <Col span={6} key={car.name}>
            <Card
              cover={<div style={{ height: 180, background: "#eee" }} />}
              style={{
                borderRadius: 12,
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <Title level={4}>{car.name}</Title>
              <p>{car.year}</p>
              <p style={{ fontWeight: 600 }}>{car.price}</p>

              <Button
                size="large"
                style={{
                  background: "#ff1a1a",
                  border: "none",
                  color: "white",
                }}
              >
                Más detalles
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
